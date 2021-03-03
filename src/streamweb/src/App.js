import React from 'react';
import ReactPlayer from 'react-player';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

//import './App.css';

//declare var awsExports;
import awsExports from './aws-exports.json';

class App extends React.Component {
  state = {
    url: null,
    playing: false,
    stream: "STREAM"
  }

  load = (url,stream) => {
    this.setState({
      url:url,
      stream:stream,
      played: 0,
      playing: true
    })
  }

  ref = player => {
    this.player = player
  }

  render() {
    const { url, stream, playing } = this.state
  
    return (
      <div className="main">
        <h1>Livestream</h1>
        <p>
          This website will livestream services for Richard McGarry.  
			  </p>

        <div className='player-wrapper'>
        <ReactPlayer
          ref={this.ref}
          className='react-player'
          url={url}
          playing={playing}
          controls
          width='100%'
          height='100%'
        />
        </div>
        
        <ListGroup horizontal>
          <ListGroup.Item><b>{stream}</b></ListGroup.Item>
          <ListGroup.Item className="url"><span>{ url }</span></ListGroup.Item>
        </ListGroup>

        <p>
        <strong>IMPORTANT!</strong> This page will work best in Chrome, Firefox, or Safari (Not Internet Explorer).<br/><br/>Once the service has started just push one of the green buttons below. The stream should start above in the player. If one doesn't work, try the next one. Once the stream starts hover over the player and click the 'full screen' icon to view the stream in full screen. <br/><br/> This page was put together pretty quick but should work on mobile devices, tablets, and computers but was mostly just tested on a computer.
        </p>

        <Button onClick={() => this.load(awsExports.hls_manifest,"HLS")} className="perview" size="sm" variant="success">Preview HLS</Button>
        <Button onClick={() => this.load(awsExports.dash_manifest,"DASH")} className="perview" size="sm" variant="success">Preview DASH</Button>
        <Button onClick={() => this.load(awsExports.cmaf_manifest,"CMAF")} className="perview" size="sm" variant="success">Preview CMAF</Button>
        
        <CardDeck style={{ margin: '4rem auto'}}>
          <Card>
            <Card.Header>Resources</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><a href="https://nolanfh.com/tribute/details/2668/Richard-McGarry/obituary.html#tribute-start" target="_blank" rel="noopener noreferrer">Richard's Obituary</a></ListGroup.Item>
              <ListGroup.Item>In lieu of flowers please consider donating to <a href="https://www.littleshelter.org/donate" target="_blank" rel="noopener noreferrer">"Little Shelter"</a></ListGroup.Item>
            </ListGroup>
          </Card>
        </CardDeck>

      </div>
    );
  }
}

export default App;
