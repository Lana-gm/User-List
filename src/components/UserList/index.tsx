import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  fetchUsersRequest,
  removeFromFavorites,
} from "../../store/modules/users/actions";
import { User } from "../../store/modules/users/types";
import { RootState } from "../../store/store";
import SearchInput from "../SearchInput";
import * as S from "./UserList.styles";

const UsersList = () => {
  const dispatch = useDispatch();

  const { users, favorites, loading } = useSelector(
    (state: RootState) => state.users
  );

  const [search, setSearch] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const filteredUsers = (showFavorites ? favorites : users).filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const isFavorite = (userId: number) =>
    favorites.some((user) => user.id === userId);

  const handleFavoriteToggle = (user: User) =>
    isFavorite(user.id)
      ? dispatch(removeFromFavorites(user.id))
      : dispatch(addToFavorites(user));

  return (
    <S.Container>
      <h1>Users List</h1>
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search by name..."
      />

      <S.FavoriteButon
        bgColor="#007bff"
        onClick={() => setShowFavorites(!showFavorites)}
      >
        {showFavorites ? "Show All Users" : "Show Favorites"}
      </S.FavoriteButon>

      {loading ? (
        <S.Spinner />
      ) : (
        <S.List>
          {favorites.length === 0 && showFavorites ? (
            <p>No favorites yet.</p>
          ) : filteredUsers.length === 0 ? (
            <p>No users found.</p>
          ) : (
            filteredUsers.map((user) => (
              <S.Card key={user.id}>
                <S.CardContent to={`/user/${user.id}`}>
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                  <span>{user.phone}</span>
                </S.CardContent>

                <S.FavoriteButon
                  onClick={() => handleFavoriteToggle(user)}
                  bgColor={isFavorite(user.id) ? "#ff5757" : "#4caf50"}
                >
                  {isFavorite(user.id) ? "Remove Favorite" : "Add Favorite"}
                </S.FavoriteButon>
              </S.Card>
            ))
          )}
        </S.List>
      )}
    </S.Container>
  );
};

export default UsersList;
