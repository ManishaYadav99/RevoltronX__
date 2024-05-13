import React from 'react';
import NewsList from './components/NewsList';

const App = () => {
  return (
    <div className="min-h-screen bg-cover" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1389157460/photo/newspaper-and-digital-tablet-on-wooden-table.jpg?s=612x612&w=0&k=20&c=CNKIHIEE4HnEnqDpUCyvnEfbf8nn90jRfX6TmhbGBxc=')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="bg-blue-400 bg-opacity-75 min-h-screen flex justify-center items-center">
        <div className="container mx-auto py-8 text-center">
          <h1 className="text-4xl font-bold mb-8 bg-blue-200 h-12 tracking-tight max-sm:2xl">WORLD  NEWS  WEBSITE</h1>
          <NewsList />
        </div>
      </div>
    </div>
  );
};

export default App;
