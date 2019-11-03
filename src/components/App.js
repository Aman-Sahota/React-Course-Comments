import React from "react";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="today at 4:45 pm"
          content="Nice Blog Post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="today at 6:00 pm"
          content="I like the subject"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="today at 10:00 pm"
          content="I like the writing"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
