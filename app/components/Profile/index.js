import React from 'react';
import PropTypes from 'prop-types';

import userImage from './imgs/user.png';
import { ProfileContainer, Username, ImageUser } from './styles';

class Profile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { user } = this.props;

    return (
      <ProfileContainer>
        <ImageUser src={userImage} />
        <Username>{user.username}</Username>
      </ProfileContainer>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
