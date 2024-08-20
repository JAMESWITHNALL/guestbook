import React from 'react';

export default function HolidayPage({ guestbook }) {
  const filteredEntries = guestbook.filter(entry => entry.topic === "Where I've been on holiday");

  return (
    <div>
      <h1>Where I've Been on Holiday</h1>
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
