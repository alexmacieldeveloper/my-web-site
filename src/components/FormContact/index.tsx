import { useState } from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
// import Divider from '@mui/material/Divider';
// import { addDoc, collection } from "firebase/firestore";
// import { db } from '../../services/firebaseConfig'

export const FormContact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loadingForm, setLoadingForm] = useState(false);

    interface ChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };
    
    interface FormData {
        name: string;
        email: string;
        message: string;
    }

    interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        const data: FormData = {
            name: form.name,
            email: form.email,
            message: form.message
        };
        setLoadingForm(true);
        try {
            // Salva no Firestore
            // await addDoc(collection(db, "contactsForm"), data);

            // Envia para backend (e-mail)
            const response = await fetch('https://my-web-api-app.onrender.com/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.status === 200) {
                alert("Mensagem enviada com sucesso!");
            } else {
                alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
            }
        } catch (error) {
            console.error("Erro ao enviar mensagem: ", error);
        }
        setLoadingForm(false);
    };
    

        return (
            <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, gap: 2,
                    margin: "50px auto", 
                    boxShadow: 2, 
                    borderRadius: 2,
                    bgcolor: "transparent", }}
            >
                <TextField
                    label="Nome"
                    variant="outlined"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{ bgcolor: "#f5f5f7", borderRadius: "8px"}}
                    
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{ bgcolor: "#f5f5f7", borderRadius: "8px"}}
                />
                <TextField
                    label="Mensagem"
                    variant="outlined"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ bgcolor: "#f5f5f7",   borderRadius: "8px"}}
                />
                
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, bgcolor: "primary", color: "#fff", borderRadius: "8px" }} disabled={loadingForm} fullWidth>
                    Enviar
                </Button>
            </Box>
        )
}