import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SceneAnnotation from '../components/SceneAnnotation';
import DiscussionThread from '../components/DiscussionThread';

interface Annotation {
  id: string;
  startTime: string;
  endTime: string;
  content: string;
  username: string;
  date: string;
}

interface Discussion {
  id: string;
  author: string;
  date: string;
  content: string;
}

interface MovieDetails {
  id: string;
  title: string;
  year: number;
  director: string;
  runtime: number;
}

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [newAnnotation, setNewAnnotation] = useState({
    startTime: '',
    endTime: '',
    content: ''
  });
  const [newDiscussion, setNewDiscussion] = useState('');

  useEffect(() => {
    // In a real app, fetch movie details, annotations, and discussions
    setMovie({
      id: '4',
      title: 'ghost in the shell',
      year: 1995,
      director: 'mamoru oshii',
      runtime: 83
    });

    setAnnotations([
      {
        id: '1',
        startTime: '00:24:15',
        endTime: '00:26:30',
        content: 'the iconic dive scene - visual parallels with neuromancer\'s concept of "jacking in" to cyberspace. note the water as metaphor for digital consciousness.',
        username: 'jdoe_92',
        date: '02 feb 2025'
      },
      {
        id: '2',
        startTime: '00:42:18',
        endTime: '00:44:22',
        content: 'the boat scene conversation about what constitutes humanity mirrors the ship of theseus paradox - if all parts are replaced, is it still the same entity?',
        username: 'cypherpunk01',
        date: '28 jan 2025'
      }
    ]);

    setDiscussions([
      {
        id: '1',
        author: 'neuraljack',
        date: '17 feb 2025',
        content: 'oshii\'s emphasis on reflections throughout the film creates a wonderful visual motif that reinforces the central identity questions. every mirror becomes a philosophical device.'
      },
      {
        id: '2',
        author: 'filmtheory_22',
        date: '12 feb 2025',
        content: 'the use of background city scenes with minimal dialogue creates contemplative spaces where the viewer is forced to consider the implications of the narrative rather than being directly told.'
      }
    ]);
  }, [id]);

  const handleAnnotationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewAnnotation(prev => ({ ...prev, [id.replace('timestamp-', '')]: value }));
  };

  const handleAnnotationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, submit to backend
    console.log('New annotation:', newAnnotation);
    // Reset form
    setNewAnnotation({ startTime: '', endTime: '', content: '' });
  };

  const handleDiscussionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, submit to backend
    console.log('New discussion:', newDiscussion);
    // Reset form
    setNewDiscussion('');
  };

  if (!movie) return <div>loading...</div>;

  return (
    <section id="movie-detail" className="mt-20">
      <h1>{movie.title} ({movie.year})</h1>
      <div className="flex space-between">
        <div>director: {movie.director}</div>
        <div>runtime: {movie.runtime} min</div>
      </div>

      <div className="scene-container">
        <h2>scene annotations</h2>
        
        {annotations.map(annotation => (
          <SceneAnnotation 
            key={annotation.id}
            startTime={annotation.startTime}
            endTime={annotation.endTime}
            content={annotation.content}
            username={annotation.username}
            date={annotation.date}
          />
        ))}

        <h3 className="mt-20">add new annotation</h3>
        <form onSubmit={handleAnnotationSubmit}>
          <div>
            <label htmlFor="timestamp-startTime">start time (hh:mm:ss)</label>
            <input 
              type="text" 
              id="timestamp-startTime" 
              value={newAnnotation.startTime}
              onChange={handleAnnotationChange}
              placeholder="00:00:00" 
            />
          </div>
          <div>
            <label htmlFor="timestamp-endTime">end time (hh:mm:ss)</label>
            <input 
              type="text" 
              id="timestamp-endTime" 
              value={newAnnotation.endTime}
              onChange={handleAnnotationChange}
              placeholder="00:00:00" 
            />
          </div>
          <div>
            <label htmlFor="content">your annotation</label>
            <textarea 
              id="content" 
              rows={5} 
              value={newAnnotation.content}
              onChange={handleAnnotationChange}
              placeholder="what did you notice about this scene?" 
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>

      <div className="discussion-container">
        <h2>discussions</h2>
        
        {discussions.map(discussion => (
          <DiscussionThread 
            key={discussion.id}
            author={discussion.author}
            date={discussion.date}
            content={discussion.content}
          />
        ))}

        <h3 className="mt-20">join the discussion</h3>
        <form onSubmit={handleDiscussionSubmit}>
          <textarea 
            rows={4} 
            value={newDiscussion}
            onChange={(e) => setNewDiscussion(e.target.value)}
            placeholder="share your thoughts..." 
          />
          <button type="submit">post</button>
        </form>
      </div>
    </section>
  );
};

export default MovieDetail;
