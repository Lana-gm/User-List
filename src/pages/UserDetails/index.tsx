import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserDetails from "../../components/UserDetails";
import { RootState } from "../../store/store";
import * as S from "./UserDetails.styles";

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  const user = users.find((user) => user.id === Number(id));

  return (
    <S.Container>
      <h1>User Details</h1>
      <UserDetails user={user} loading={loading} />
    </S.Container>
  );
};

export default UserDetail;
