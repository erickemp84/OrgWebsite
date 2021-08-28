import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


export class MapContainer extends Component {
    render() {

        const style = {
            width: '50%',
            height: '60%',
            border: '2px solid red'
        }

        return (
            
            //This is the code that makes the map show up.
            //The above style declaration is how it's sized so it's not taking up the whole screen.
            
                <div clasName="map">
                    <Map google={this.props.google}
                        initialCenter={{
                            lat: 35.652868,
                            lng: -97.478289
                        }
                        }
                        zoom={15}
                        onClick={this.onMapClicked}
                        style={style}

                    >
                        {/* //The marker code is how you drop pins on the map in static locations. */}
                        {/* Notice that the marker code goes inside the Map code snippet. */}
                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'}
                        />

                        <Marker
                            title={'This is the grocery store.'}
                            name={'Crest'}
                            position={{lat: 35.636616, lng: -97.512705}} 
                        />

                        <Marker 
                            title={'Home sweet Home.'}
                            name={'Home'}
                            position={{lat: 35.644742, lng: -97.516998}}
                        />
                    </Map >
                </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAuIow7fs_5oWe8ecBLrc0rCKoXPEzBPjA')
})(MapContainer)