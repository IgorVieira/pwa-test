import React, { Component } from 'react';
import Notification from './notification-config';

//allow react dev tools work
window.React = React;

class NotifiqueMe extends Component {
    constructor() {
        super();
        this.state = {
            ignore: true,
            title: ''
        };
    }

    handlePermissionGranted() {
        console.log('Permission Granted');
        this.setState({
            ignore: false
        });
    }
    handlePermissionDenied() {
        console.log('Permission Denied');
        this.setState({
            ignore: true
        });
    }
    handleNotSupported() {
        console.log('Web Notification not Supported');
        this.setState({
            ignore: true
        });
    }

    handleNotificationOnClick(e, tag) {
        console.log(e, 'Notification clicked tag:' + tag);
    }

    handleNotificationOnError(e, tag) {
        console.log(e, 'Notification error tag:' + tag);
    }

    handleNotificationOnClose(e, tag) {
        console.log(e, 'Notification closed tag:' + tag);
    }

    handleNotificationOnShow(e, tag) {
        console.log(e, 'Notification shown tag:' + tag);
    }

    handleButtonClick() {

        if (this.state.ignore) {
            return;
        }

        const now = Date.now();

        const title = 'Trackmob';
        const body = '#PACIMA Trackeiros!';
        const tag = now;
        const icon = 'https://raw.githubusercontent.com/danilosilvadev/pwa-test/gh-pages/karaoke.png';
        // const icon = 'http://localhost:3000/Notifications_button_24.png';

        // Available options
        // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
        const options = {
            tag: tag,
            body: body,
            icon: icon,
            lang: 'en',
            dir: 'ltr',
        }
        this.setState({
            title: title,
            options: options
        });
    }

    render() {

        return <div>
            <button onClick={this.handleButtonClick.bind(this)}>Notif!</button>
            <Notification
                ignore={this.state.ignore && this.state.title !== ''}
                notSupported={this.handleNotSupported.bind(this)}
                onPermissionGranted={this.handlePermissionGranted.bind(this)}
                onPermissionDenied={this.handlePermissionDenied.bind(this)}
                onShow={this.handleNotificationOnShow.bind(this)}
                onClick={this.handleNotificationOnClick.bind(this)}
                onClose={this.handleNotificationOnClose.bind(this)}
                onError={this.handleNotificationOnError.bind(this)}
                timeout={5000}
                title={this.state.title}
                options={this.state.options}
            />
        </div>
    }
}

export default NotifiqueMe