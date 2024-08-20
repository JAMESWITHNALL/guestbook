import React from 'react';

export default function TodayPage({ guestbook }) {
  const filteredEntries = guestbook.filter(entry => entry.topic === "What I'm up to today");

  return (
    <div>
      <h1>What I'm Up to Today</h1>
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
