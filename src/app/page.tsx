"use client"
import ThemeToggle from "@/components/dashboard/ui/ThemeToggle";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";


export default function Home() {

    return (
        <>

            <Box sx={{
                backgroundImage: 'url(/wave.svg)',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2
            }}>

                <Typography variant="h1" sx={{ textAlign: 'center', fontWeight: 'bold', pb: 2, }}>"Bem-vindo à plataforma web de
                    gerenciamento de dados!"
                </Typography>
                <ThemeToggle/>
                <Box sx={{
                    width: {
                        xs: '90%',    // Mobile (telas pequenas) - 90% da largura
                        sm: '80%',    // Mobile (telas maiores) - 80%
                        md: '70%',    // Tablet - 70%
                        lg: '60%',    // Notebook - 60%
                        xl: '50%'     // Desktop grande - 50%
                    },
                    mx: 'auto',     // Centraliza horizontalmente
                    px: 2           // Padding horizontal para não colar nas bordas
                }}>
                    <Typography variant="subtitle1" sx={{
                        textAlign: 'justify',
                        pb: 4,
                       
                        fontSize: {
                            xs: '1rem',   // Mobile pequeno
                            sm: '1.1rem',  // Mobile grande
                            md: '1.2rem',  // Tablet
                            lg: '1.3rem'   // Desktop
                        }
                    }}>"Organize, acompanhe e analise com facilidade
                        as informações dos alunos, incluindo o cálculo automático do IMC.
                        Ideal para escolas, academias e profissionais de saúde, nossa ferramenta
                        oferece acesso rápido e seguro, em qualquer dispositivo."
                    </Typography>
                </Box>
                <Link href={"/login"}>
                    <Button variant="contained" color="secondary" sx={{ width: 300, }}>
                        Entrar
                    </Button>
                </Link>
            </Box>
        </>

    );
}
