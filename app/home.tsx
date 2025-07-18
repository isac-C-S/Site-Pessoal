"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, Moon, Sun, X, ExternalLink, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BackgroundAnimation } from "@/components/background-animation";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { to: "sobre", label: "Sobre" },
    { to: "habilidades", label: "Habilidades" },
    { to: "projetos", label: "Projetos" },
    { to: "contato", label: "Contato" }
  ];

  const habilidades = [
    "HTML e CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Git",
    "SQL Básico"
  ];

  const projetos = [
    {
      titulo: "E-commerce Moderno",
      descricao: "Plataforma completa de comércio eletrônico com gestão de estoque em tempo real",
      tecnologias: ["React", "Node.js", "PostgreSQL"],
      imagem: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "https://github.com/seu-usuario/ecommerce",
      demo: "https://seu-ecommerce.vercel.app"
    },
    {
      titulo: "Sistema de Gestão",
      descricao: "Sistema empresarial para gestão de projetos e equipes",
      tecnologias: ["Next.js", "TypeScript", "MongoDB"],
      imagem: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      github: "https://github.com/seu-usuario/gestao",
      demo: "https://seu-sistema-gestao.vercel.app"
    },
    {
      titulo: "Aplicativo de Delivery",
      descricao: "Aplicativo mobile-first para entrega de produtos locais",
      tecnologias: ["React Native", "Firebase", "Node.js"],
      imagem: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80",
      github: "https://github.com/seu-usuario/delivery",
      demo: "https://seu-delivery.vercel.app"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background/50 relative">
      <BackgroundAnimation />
      
      {/* Navegação */}
      <nav className="fixed w-full nav-blur z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-gradient"
            >
              Isac Santos
            </motion.span>
            
            <div className="flex items-center gap-4">
              {mounted && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="hover:text-primary"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </motion.div>
              )}

              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>

              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className={`text-muted-foreground hover:text-primary transition-all cursor-pointer relative
                      ${activeSection === item.to ? 'text-primary' : ''}
                    `}
                    onSetActive={() => setActiveSection(item.to)}
                  >
                    {item.label}
                    {activeSection === item.to && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden border-t nav-blur"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div 
              className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden gradient-border animate-float"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80"
                alt="Foto de Perfil"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4 text-gradient animate-pulse-slow"
            >
              Desenvolvedor Full Stack Júnior
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Em busca de novos desafios e aprendizado constante
            </motion.p>
            <motion.div variants={itemVariants}>
              <ScrollLink to="projetos" spy={true} smooth={true} offset={-64} duration={500}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Ver Projetos
                  </Button>
                </motion.div>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 bg-muted/50 backdrop-blur-sm px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-2xl gradient-border"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-gradient">Sobre Mim</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-4">
              Desenvolvedor júnior apaixonado por tecnologia e programação, 
              atualmente focado em aprender e crescer na área de desenvolvimento web.
              Busco constantemente novos conhecimentos e oportunidades para aplicar
              o que aprendo em projetos práticos.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto text-center">
              Estou sempre aberto a novas oportunidades de aprendizado e colaboração
              em projetos desafiadores que me permitam expandir minhas habilidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Habilidades</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {habilidades.map((habilidade, index) => (
              <motion.div
                key={habilidade}
                variants={itemVariants}
                className="gradient-border glass-effect p-6 text-center"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <span className="font-medium">{habilidade}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-16 bg-muted/50 backdrop-blur-sm px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Projetos</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projetos.map((projeto, index) => (
              <motion.div
                key={projeto.titulo}
                variants={itemVariants}
                className="group"
              >
                <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg glass-effect gradient-border">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <motion.div 
                        className="transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <a 
                          href={projeto.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button variant="secondary" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </Button>
                        </a>
                      </motion.div>
                      <motion.div 
                        className="transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <a 
                          href={projeto.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button variant="secondary" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{projeto.titulo}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{projeto.descricao}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projeto.tecnologias.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm tech-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Contato</h2>
            <p className="text-muted-foreground">
              Vamos conversar sobre oportunidades de colaboração
            </p>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gradient-border glass-effect">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gradient-border glass-effect">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gradient-border glass-effect">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-8 border-t nav-blur">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Isac Santos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}