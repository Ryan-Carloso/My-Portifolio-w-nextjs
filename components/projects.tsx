// components/Projects.tsx
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            name: 'Shiba Helper',
            title: 'Shiba Helper AI Assistant',
            image: 'https://firebasestorage.googleapis.com/v0/b/portifolio-c0281.appspot.com/o/chatbot.png?alt=media&token=2198674c-4e03-468f-8ec3-99c714975cd4',
            desc: '(Chatbot AI)',
            date: '2024/07',
            rating: 4,
            techsUsed: ['React', 'Firebase Auth', 'GPT-API'],
            href: 'https://shibahelper.netlify.app/',
            github: 'https://github.com/yourusername/shiba-helper' // GitHub link
        },
        {
            name: 'Securebit',
            title: 'Securebit Crypto Exchange',
            image: 'https://firebasestorage.googleapis.com/v0/b/portifolio-c0281.appspot.com/o/_e8b55b06-b4b8-4eaa-98a2-b4d5425d120b.jpeg?alt=media&token=527e3e6a-33ae-4190-b36c-56ead4ddd4e3',
            desc: 'Crypto Exchange',
            date: '2024/06',
            rating: 4,
            techsUsed: ['HTML', 'JS', 'CoinGecko-API'],
            href: '/Portifolio/SecurebitScreen',
            github: 'https://github.com/yourusername/securebit' // GitHub link
        },
        {
            name: 'GeoFinder',
            title: 'GeoFinder Location Service',
            image: 'https://firebasestorage.googleapis.com/v0/b/portifolio-c0281.appspot.com/o/_951c18cb-f42b-4ec2-a015-fd1a6a186086.jpeg?alt=media&token=b3754feb-8ece-46a3-a813-6071622a7a25',
            desc: 'Geolocation Finder',
            date: '2024/05',
            rating: 4,
            techsUsed: ['React Native', 'Firebase', 'React', 'CRUD'],
            href: '/Portifolio/GeoFinderScreen',
            github: 'https://github.com/yourusername/geofinder' // GitHub link
        },
        {
            name: 'This Portfolio',
            title: 'Interactive Developer Portfolio',
            image: 'https://firebasestorage.googleapis.com/v0/b/portifolio-c0281.appspot.com/o/_a915dc0c-2a37-43fe-9595-410c7793e299.jpeg?alt=media&token=4ba71102-aae3-4ee3-8051-4b4b5de5aaf4',
            desc: 'portfolio',
            date: '2024/07',
            rating: 3,
            techsUsed: ['React Native', 'React Native For Web', 'Firebase Storage'],
            href: '/Portifolio/PortfolioScreen',
            github: 'https://github.com/yourusername/portfolio' // GitHub link
        }
    ];

    return (
        <div>
            <section id="projects" className="py-2 bg-gray-800 bg-opacity-50 relative z-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-blue-400">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={project.name} className="transition-all duration-500 ease-in-out transform hover:scale-105" style={{ transitionDelay: `${index * 200}ms` }}>
                                <CardContent className="p-2 flex flex-row items-start h-full">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-32 h-full object-cover rounded-lg mr-4"
                                    />
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                                            <CardDescription className="mb-1">{project.desc}</CardDescription>
                                        </div>
                                        
                                        <div className="mb-2">
                                            <span className="font-semibold">Dificuldade: </span>
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span key={i} className={`inline-block w-4 h-4 ${i < Math.floor(project.rating) ? 'text-yellow-400' : 'text-gray-400'}`}>
                                                    &#9733;
                                                </span>
                                            ))}
                                            {project.rating % 1 !== 0 && <span className="inline-block w-4 h-4 text-yellow-400">&#9733;</span>}
                                        </div>

                                        <div className="mb-1">
                                            <span className="font-semibold">Data: </span>
                                            <span>{project.date}</span>
                                        </div>

                                        <div className="mb-1">
                                            <span className="font-semibold">Tecnologias: </span>
                                            <span>{project.techsUsed.join(', ')}</span>
                                        </div>

                                        <div className="flex">
                                            <Link href={project.href} passHref>
                                                <Button variant="secondary">View Project</Button>
                                            </Link>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Button variant="secondary" className="ml-2">GitHub</Button>
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
