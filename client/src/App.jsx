import React from 'react';
import ArtistWidget from './components/ArtistWidget';
import SongDetailWidget from './components/songDetailWidget';

import artistData from './data/artistData.js'

import Styled from './appContainerStyle';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsTruncated: true,
      artistData: artistData,
      songData: null,
      artistIdx: null,
    };
    this.toggleTruncate = this.toggleTruncate.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/description${window.location.pathname}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          songData: data,
        });
        return data;
      });
  }

  toggleTruncate() {
    const { detailsTruncated } = this.state;
    this.setState({
      detailsTruncated: !detailsTruncated,
    });
  }

  render() {
    const {
      artistData, artistIdx, songData, detailsTruncated,
    } = this.state;

    let songNumber = window.location.pathname.split('/')[2];
    if (songNumber === '' || !songNumber) {
      songNumber = 4;
    }
    return (
      <Styled>
        <ArtistWidget artistData={artistData && artistData[0]} />
        <SongDetailWidget artistData={artistData} songData={songData && songData[0]} truncated={detailsTruncated} toggleTruncate={this.toggleTruncate} />
      </Styled>
    );
  }
}

export default App;