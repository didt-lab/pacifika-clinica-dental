import React from 'react';
import { Button, Card, Input, ServiceCard, DoctorCard, StatsCard } from '../index';

// Ejemplos de uso del sistema de diseño
const UsageExamples: React.FC = () => {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="title-xl mb-8">Sistema de Diseño - Ejemplos de Uso</h1>
      
      {/* Botones */}
      <section>
        <h2 className="title-lg mb-4">Botones</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm">Botón Pequeño</Button>
          <Button variant="primary" size="md">Botón Mediano</Button>
          <Button variant="primary" size="lg">Botón Grande</Button>
          <Button variant="secondary">Secundario</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="title-lg mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default" padding="md">
            <h3 className="title-sm mb-2">Card Default</h3>
            <p className="text-body">Contenido de la tarjeta con estilo por defecto.</p>
          </Card>
          
          <Card variant="elevated" padding="md">
            <h3 className="title-sm mb-2">Card Elevated</h3>
            <p className="text-body">Contenido de la tarjeta con sombra elevada.</p>
          </Card>
          
          <Card variant="outlined" padding="md">
            <h3 className="title-sm mb-2">Card Outlined</h3>
            <p className="text-body">Contenido de la tarjeta con borde.</p>
          </Card>
        </div>
      </section>

      {/* Formularios */}
      <section>
        <h2 className="title-lg mb-4">Formularios</h2>
        <div className="max-w-md">
          <form className="space-y-4">
            <Input
              label="Nombre completo"
              placeholder="Ingresa tu nombre"
              required
            />
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="tu@email.com"
              required
            />
            <Input
              label="Teléfono"
              type="tel"
              placeholder="+52 669 123 4567"
              helperText="Incluye el código de área"
            />
            <Input
              label="Mensaje"
              placeholder="Cuéntanos cómo podemos ayudarte"
              error="Este campo es requerido"
            />
            <Button type="submit" className="w-full">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>

      {/* Service Cards */}
      <section>
        <h2 className="title-lg mb-4">Service Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Odontología General"
            description="Cuidado oral completo para cada sonrisa con limpiezas, exámenes y más."
            icon="🦷"
            onClick={() => console.log('Odontología General')}
          />
          <ServiceCard
            title="Odontología Cosmética"
            description="Mejora la belleza de tu sonrisa con blanqueamiento, carillas y más."
            icon="✨"
            onClick={() => console.log('Odontología Cosmética')}
          />
          <ServiceCard
            title="Ortodoncia"
            description="Corrige la alineación de tus dientes con brackets estéticos y modernos."
            icon="🦷"
            onClick={() => console.log('Ortodoncia')}
          />
        </div>
      </section>

      {/* Doctor Cards */}
      <section>
        <h2 className="title-lg mb-4">Doctor Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DoctorCard
            name="Dr. Juan Lizarraga"
            specialty="Endodoncia"
            experience="10+ años"
          />
          <DoctorCard
            name="Dra. Krizia Zamudio"
            specialty="Odontología General"
            experience="8+ años"
          />
          <DoctorCard
            name="Dr. Mario Díaz"
            specialty="Periodoncia e Implantología"
            experience="12+ años"
          />
        </div>
      </section>

      {/* Stats Cards */}
      <section>
        <h2 className="title-lg mb-4">Stats Cards</h2>
        <div className="bg-primary-500 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCard
              number="500+"
              label="Pacientes Felices"
            />
            <StatsCard
              number="200+"
              label="Dientes Blanqueados"
            />
            <StatsCard
              number="50+"
              label="Implantes Dentales"
            />
            <StatsCard
              number="15"
              label="Años de Experiencia"
            />
          </div>
        </div>
      </section>

      {/* Utilidades CSS */}
      <section>
        <h2 className="title-lg mb-4">Utilidades CSS</h2>
        <div className="space-y-4">
          <div className="card hover-lift p-6">
            <h3 className="title-sm mb-2">Card con Hover Lift</h3>
            <p className="text-body">Pasa el mouse sobre esta tarjeta para ver el efecto.</p>
          </div>
          
          <div className="card hover-glow p-6">
            <h3 className="title-sm mb-2">Card con Hover Glow</h3>
            <p className="text-body">Pasa el mouse sobre esta tarjeta para ver el brillo.</p>
          </div>
          
          <div className="animate-float p-6 bg-blue-100 rounded-lg">
            <h3 className="title-sm mb-2">Elemento Flotante</h3>
            <p className="text-body">Este elemento tiene animación flotante.</p>
          </div>
        </div>
      </section>

      {/* Gradientes */}
      <section>
        <h2 className="title-lg mb-4">Gradientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-primary p-6 rounded-lg text-white">
            <h3 className="title-sm mb-2">Gradiente Primario</h3>
            <p className="text-white/90">Gradiente azul de la marca.</p>
          </div>
          
          <div className="bg-gradient-secondary p-6 rounded-lg text-white">
            <h3 className="title-sm mb-2">Gradiente Secundario</h3>
            <p className="text-white/90">Gradiente verde de la marca.</p>
          </div>
          
          <div className="bg-gradient-hero p-6 rounded-lg">
            <h3 className="title-sm mb-2">Gradiente Hero</h3>
            <p className="text-body">Gradiente suave para secciones hero.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsageExamples;
