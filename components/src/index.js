import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
        <div>
        <h4> Warning! </h4>
         Are you sure you want to do this?
        </div>
        </ApprovalCard>
           <ApprovalCard>
           <CommentDetail 
                author="Zozo" 
                timeAgo="Today at 4:45PM" 
                commentText="Amazing blog!!!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
           <CommentDetail 
                author="Janey" 
                timeAgo="Today at 7:45PM" 
                commentText="Loved the content!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
           <CommentDetail 
                author="David" 
                timeAgo="Yesterday at 4:45PM" 
                commentText="Nice blog post!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
 
        </div>
    )
};

ReactDOM.render(<App/>,document.querySelector('#root'));
