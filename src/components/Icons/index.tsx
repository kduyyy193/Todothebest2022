import Mail from "./Email";
import Lock from "./Lock";
import User from "./User";
import PersonIcon from "@mui/icons-material/Person";
import Dashboard from "@mui/icons-material/Dashboard";
import Settings from "@mui/icons-material/Settings";
import Check from "@mui/icons-material/CheckCircle";
import Time from "@mui/icons-material/AccessTimeFilled";
import Work from "@mui/icons-material/Work";
import Plus from "@mui/icons-material/AddCircle";
import Edit from "@mui/icons-material/Edit";
import Trash from "@mui/icons-material/Delete";
import List from "@mui/icons-material/Dehaze";
import Logout from "@mui/icons-material/Logout";
import DragIndicator from "@mui/icons-material/DragIndicator";
import Calendar from "@mui/icons-material/CalendarMonth";

export interface IconsProps {
  size?: number;
  className?: string;
  width?: string;
  height?: string;
  color?: string;
}

const Icons = {
  Lock,
  Mail,
  User,
  PersonIcon,
  Dashboard,
  Settings,
  List,
  Logout,
  Check,
  Time,
  Work,
  Plus,
  Edit,
  Trash,
  DragIndicator,
  Calendar,
};

export default Icons;
