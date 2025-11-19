import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';

export default function App() {
  const [people, setPeople] = useState(profiles);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  // Like handler
  const handleLike = (id) => {
    setPeople(ps =>
      ps.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();

    // Validation
    if (!trimmed) {
      setError('Name is required.');
      return;
    }
    const exists = people.some(
      (p) => p.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (exists) {
      setError('That name already exists.');
      return;
    }

    // Add new profile
    const newProfile = {
      id: people.length ? Math.max(...people.map(p => p.id)) + 1 : 1,
      name: trimmed,
      likes: 0
    };
    setPeople([...people, newProfile]);
    setName('');
    setError('');
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>

      {/* Add new profile form */}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row className="align-items-center">
          <Col xs={8} md={9}>
            <Form.Control
              type="text"
              placeholder="Enter a name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Col>
          <Col xs={4} md={3}>
            <Button variant="primary" type="submit" className="w-100">
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Profiles grid */}
      <Row xs={1} md={2} lg={3}>
        {people.map((p) => (
          <Col key={p.id}>
            <ProfileCard
              name={p.name}
              likes={p.likes}
              onLike={() => handleLike(p.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}