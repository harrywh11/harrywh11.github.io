import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Server } from 'lucide-react';
import figure1 from './assets/images/figure1.png';
import figure2 from './assets/images/figure2.png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-4">Hi, I'm Harry</h1>
            <p className="text-2xl text-gray-300 mb-8">PhD Student in Bioengineering at Caltech</p>
            <div className="flex gap-4">
              <a href="https://github.com/harrywh11" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/hao-wang-249401179/" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:harrytom@163.com" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              I am Hao (Harry) Wang, a PhD Student in Bioengineering Department at Caltech, coadvised by 
              <a href="https://thomsonlab.caltech.edu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Matt Thomson</a> 
              and 
              <a href="https://zernickagoetzlab.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Magdalena Zernicka-Goetz</a>.
            </p>
            <p className="text-lg text-gray-300">
              I am working on developing active matter-based tools with microfluidics and simulations for such tools. I am also working on the origin of the broken asymmetry in life. I also plan to study the effects of mutations on human blastoids and build an active matter-guided cell assembly.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <Code2 className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Micro-fabrication</h3>
              <p className="text-gray-300">Photolithrography& soft lithrography</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Server className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Computer simulation & image processing</h3>
              <p className="text-gray-300">Python based simulation or 3D image analysis pipline</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Database className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Embryo culture</h3>
              <p className="text-gray-300">Mouse & human stem cell models</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Palette className="w-12 h-12 mb-4 text-pink-400" />
              <h3 className="text-xl font-bold mb-2">Tool development</h3>
              <p className="text-gray-300">In-vitro culture systems; mini-rocker, pressure sensors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: 1,
                title: "Facile Fluid Pressure System",
                description: "A facile fluid pressure system reveals differential cellular response to interstitial pressure gradients and flow.",
                image: figure1,
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10539030/",
              },
              {
                id: 2,
                title: "Microphysiological Model of PIK3CA-driven Vascular Malformations",
                description: "Microphysiological model of PIK3CA-driven vascular malformations reveals a role of dysregulated Rac1 and mTORC1/2 in lesion formation.",
                image: figure2,
                link: "https://pubmed.ncbi.nlm.nih.gov/36791204/",
              },
            ].map((project) => (
              <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:harrytom@163.com"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Hao Wang. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;