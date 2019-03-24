import React from 'react';

export default class Post extends React.Component {
  render() {
    const { data } = this.props;
    const deadline = new Date(data.deadline.seconds);
    return (
      <div className="post-container">
        <div className="post-detail-row">
          <div className="post-detail-box">{data.need}</div>
          <div className="post-detail-box">
            {deadline.toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
        <div className="post-detail-box">
          <p className="fineprint">
            posted at {data.createdAt} by your neighbor, {data.user}
          </p>
          <button className="btn-primary">Chip in</button>
        </div>
      </div>
    );
  }
}
