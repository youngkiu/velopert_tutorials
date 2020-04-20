import React, { Component } from 'react';

class User extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.user !== nextProps.user;
    }

    render() {
        const { user: { username } } = this.props;
        console.log('%s가 렌더링 되고있어요!!!', username);

        return (
            <div>
                {username}
            </div>
        );
    }
}

export default User;