import React from 'react';

export default function AboutPage({ guestbook }) {
  const filteredEntries = guestbook.filter(entry => entry.topic === "About myself");

  return (
    <div>
      <h1>About Myself</h1>
      {filteredEntries.length > 0 ? (
        filteredEntries.map(guest => (
          <h3 key={guest.id}>
            {guest.first_name} {guest.last_name}: {guest.comments}
          </h3>
        ))
      ) : (
        <p>No entries found for this topic.</p>
      )}
    </div>
  );
}
