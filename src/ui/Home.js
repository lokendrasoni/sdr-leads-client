import { useContext } from 'react';
import DashboardHome from './Dashboard/Home';
import Login from './Auth/Login';
import AppDataStore from "../contexts/AppDataStore";

export default function Home() {
  const { user } = useContext(AppDataStore);

  if (user) {
    return <DashboardHome />
  }
  else {
    return <Login />
  }
}
