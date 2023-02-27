import { useHistory } from "react-router-dom";

const useCustomNavigate = () => {
  const history = useHistory();

  return (path: string) => {
    history.push(path);
  }
};

export default useCustomNavigate;