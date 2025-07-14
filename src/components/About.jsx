import { Code, Columns4, Frame } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold uppercase">
              Frontend web developer
            </h3>

            <p className="text-muted-foreground">
              5 years + of experience in building responsive and user-friendly
              web applications using modern technologies like React, vite, and
              Tailwind CSS. I have a strong foundation in HTML, CSS, and
              JavaScript, and I'm always eager to learn new skills and improve
              my craft.
            </p>

            <p className="text-muted-foreground">
              I am learning Django Rest Framework to enhance my backend
              development skills and create more dynamic and interactive web
              Apis. <br />
              #React #JavaScript #TailwindCSS #Vite #FrontendDeveloper #django
              rest Api #python #Wordpress
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/public/uday-cv.pdf"
                download="Uday-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive Ecommerce store websites and small
                    business websites using modern technologies like React,
                    Vite, and Tailwind CSS, Bootstrap 5 etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Columns4 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Wordpress Website Design
                  </h4>
                  <p className="text-muted-foreground">
                    I also work on Wordpress Gutenburg block editor and
                    Elementor for small business websites. I also fix wordpress
                    design issues.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Frame className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    I design user interfaces and user experiences for web
                    applications, focusing on usability and aesthetics. I use
                    Figma for designing and prototyping web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
