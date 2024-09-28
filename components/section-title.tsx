interface SectionTitleProps {
    title: string;
  }
  
  export default function SectionTitle({ title }: SectionTitleProps) {
    return (
      <div className="relative text-center mb-8">
        <h1 className="lg:text-4xl text-3xl font-bold text-foreground">{title}</h1>
        <div className="relative mt-3 flex justify-center">
          <div className="h-1 w-52 bg-gradient-to-r from-purple-400 to-indigo-600"></div>
        </div>
      </div>
    );
  }
  