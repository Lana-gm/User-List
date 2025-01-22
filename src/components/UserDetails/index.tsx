import { Component } from "react";
import { connect } from "react-redux";
import { fetchUsersRequest } from "../../store/modules/users/actions";
import { User } from "../../store/modules/users/types";
import * as S from "./UserDetails";

interface UserDetailsProps {
  fetchUsersRequest: () => void;
  user?: User;
  loading: boolean;
}

class UserDetails extends Component<UserDetailsProps> {
  componentDidMount() {
    this.props.fetchUsersRequest();
  }

  render() {
    const { user, loading } = this.props;

    return (
      <S.Container>
        {loading ? (
          <S.Spinner />
        ) : (
          <>
            <S.ContentSession>
              <h2>{user?.name}</h2>
              <span>
                <b>Email:</b>
                {user?.email}
              </span>
              <span>
                <b>Phone:</b>
                {user?.phone}
              </span>
              <span>
                <b>Username:</b> {user?.username}
              </span>
              <span>
                <b>Website:</b>{" "}
                <a
                  href={`http://${user?.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user?.website}
                </a>
              </span>
            </S.ContentSession>
            <S.ContentSession>
              <h3>Address:</h3>
              <span>
                {user?.address.street}, {user?.address.suite}
              </span>
              <span>
                {user?.address.city}, {user?.address.zipcode}
              </span>
              <span>
                <b>Geo: </b>
                {user?.address.geo.lat}, {user?.address.geo.lng}
              </span>
            </S.ContentSession>
            <S.ContentSession>
              <h3>Company:</h3>
              <span>
                <b>Name:</b> {user?.company.name}
              </span>
              <span>
                <b>Catchphrase:</b> {user?.company.catchPhrase}
              </span>
              <span>
                <b>BS:</b> {user?.company.bs}
              </span>
            </S.ContentSession>
          </>
        )}
      </S.Container>
    );
  }
}

const mapDispatchToProps = {
  fetchUsersRequest,
};

export default connect(null, mapDispatchToProps)(UserDetails);
