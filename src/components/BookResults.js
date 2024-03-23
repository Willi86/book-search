import React, { useState } from "react";

const BookResults = ({ doc }) => {
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
//same as other stats i am adding a state to check which book is selected and storing in it in the state variable .
  return (
    <div className="table-wrapper">
      <table className="table-container">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>First Publish Year</th>
          </tr>
        </thead>
        <tbody>
          {doc.slice(0, 30).map(
            (
              item,
              index //there is many ways to do this but i sliced it here .
            ) => (
              <tr key={item.key}>
                <td
                  onClick={() =>
                    setSelectedBookIndex(
                      selectedBookIndex === index ? null : index
                    )
                  }
                >
                  {item.title}
                  {selectedBookIndex === index && (
                    <div>
                      <p>Book Information:</p>
                      <p>Title: {item.title}</p>
                      <p>Author: {item.author_name}</p>
                      <p>Publisher: {item.publisher}</p>
                      <p>Language: {item.language}</p>
                      <p>Subject: {item.subject}</p>
                    </div>
                  )}{" "}
                </td>

                <td>
                  {item.author_name
                    ? item
                        .author_name[0] /*Just taking the first index for the author names*/
                    : "Unknown Author"}
                </td>
                <td>{item.first_publish_year}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookResults;

/**titel,
 *  regissör,
 *  producent,
 *  sammanfattning av handlingen ("opening crawl"),
 *  releasedatum. */
