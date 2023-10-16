import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

type LoaderType = {
  loading: boolean;
};

const Loader = ({ loading }: LoaderType) => {
  return (
    <Backdrop sx={{ color: "#fff" }} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
