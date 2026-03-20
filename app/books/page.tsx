import { BookCard } from '@/components/BookCard';

export default function BooksPage() {
  const books = [
    {
      title: "Beginners Guide to Python Programming",
      coverImage: "https://images-na.ssl-images-amazon.com/images/P/B0GGJ8B658.01.L.jpg",
      buyLink: "https://leanpub.com/comprehensivepythonprogamming"
    },
    {
      title: "Beginner's Guide to Python Programming",
      coverImage: "https://images-na.ssl-images-amazon.com/images/P/B0GGJ8B658.01.L.jpg",
      buyLink: "https://www.amazon.com/Beginner-Guide-Python-Programming-Needed/dp/B0GGJ8B658"
    }
  ];

  return (
    <div className="container-custom py-24 min-h-[80vh]">
      <div className="mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Books & Publications.</h1>
        <p className="text-lg text-content-secondary leading-relaxed">
          Technical literature and guides on Python programming and software engineering. Available on major platforms including LeanPub and Amazon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>

      <section className="mt-20 pt-16 border-t border-border max-w-4xl">
        <h2 className="text-2xl font-bold mb-8">About This Book</h2>
        <div className="space-y-6 text-content-secondary leading-relaxed">
          <p>
            "Beginners Guide to Python Programming" is a comprehensive introduction to Python, designed for developers of all skill levels who want to master Python from the ground up. Whether you're a complete beginner or transitioning from another language, this guide provides clear explanations and practical examples.
          </p>
          <p>
            The book covers fundamental concepts including variables, data types, control flow, functions, object-oriented programming, and more. Each chapter includes hands-on exercises to reinforce learning and build confidence.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <h3 className="font-semibold text-content-primary mb-2">Available On:</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://leanpub.com/comprehensivepythonprogamming" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    LeanPub: Comprehensive Python Programming
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.com/Beginner-Guide-Python-Programming-Needed/dp/B0GGJ8B658" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    Amazon: Beginners Guide to Python Programming
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
