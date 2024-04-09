import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MuiTypography } from "./components/MuiTypography.tsx";
import { MuiButton } from "./components/MuiButton.tsx";
import { MuiTextField } from "./components/MuiTextField.tsx";
import { MuiSelect } from "./components/MuiSelect.tsx";
import { MuiRadio } from "./components/MuiRadio.tsx";
import { MuiCheckbox } from "./components/MuiCheckbox.tsx";
import { MuiSwitch } from "./components/MuiSwitch.tsx";
import { MuiRating } from "./components/MuiRating.tsx";
import { MuiAutocomplete } from "./components/MuiAutocomplete.tsx";
import { MuiLayout } from "./components/MuiLayout.tsx";
import { MuiStack } from "./components/MuiStack.tsx";
import { MuiCard } from "./components/MuiCard.tsx";
import { MuiAccodion } from "./components/MuiAccodion.tsx";
import { MuiImageList } from "./components/MuiImageList.tsx";
import { MuiNavbar } from "./components/MuiNavbar.tsx";
import { MuiLink } from "./components/MuiLink.tsx";
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs.tsx";
import { MuiDrawer } from "./components/MuiDrawer.tsx";
import { MuiSpeedDial } from "./components/MuiSpeedDial.tsx";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation.tsx";
import { MuiAvatar } from "./components/MuiAvatar.tsx";
import { MuiBadge } from "./components/MuiBadge.tsx";
import { MuiList } from "./components/MuiList.tsx";
import { MuiChip } from "./components/MuiChip.tsx";
import { MuiTooltip } from "./components/MuiTooltip.tsx";
import { MuiTable } from "./components/MuiTable.tsx";
import { MuiAlert } from "./components/MuiAlert.tsx";
import { MuiSnackbar } from "./components/MuiSnackbar.tsx";
import { MuiDialog } from "./components/MuiDialog.tsx";
import { MuiProgress } from "./components/MuiProgress.tsx";
import { MuiSkeleton } from "./components/MuiSkeleton.tsx";
import { MuiLoadingButton } from "./components/MuiLoadingButton.tsx";
import { MuiPicker } from "./components/MuiPicker.tsx";
import { MuiTabs } from "./components/MuiTabs.tsx";
import { MuiTimeline } from "./components/MuiTimeline.tsx";
import { MuiMasonry } from "./components/MuiMasonry.tsx";
import { MuiResponsiveness } from "./components/MuiResponsiveness.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/*<MuiTypography />*/}
        {/*<MuiButton />*/}
        {/*<MuiTextField />*/}
        {/*<MuiSelect />*/}
        {/*<MuiRadio />*/}
        {/*<MuiCheckbox />*/}
        {/*<MuiSwitch />*/}
        {/*<MuiRating />*/}
        {/*<MuiAutocomplete />*/}
        {/*<MuiLayout />*/}
        {/*<MuiStack />*/}
        {/*<MuiCard />*/}
        {/*<MuiAccodion />*/}
        {/*<MuiImageList />*/}
        {/*<MuiNavbar />*/}
        {/*<MuiLink />*/}
        {/*<MuiBreadcrumbs />*/}
        {/*<MuiDrawer />*/}
        {/*<MuiSpeedDial />*/}
        {/*<MuiBottomNavigation />*/}
        {/*<MuiAvatar />*/}
        {/*<MuiBadge />*/}
        {/*<MuiList />*/}
        {/*<MuiChip />*/}
        {/*<MuiTooltip />*/}
        {/*<MuiTable />*/}
        {/*<MuiAlert />*/}
        {/*<MuiSnackbar />*/}
        {/*<MuiDialog />*/}
        {/*<MuiProgress />*/}
        {/*<MuiSkeleton />*/}
        {/*<MuiLoadingButton />*/}
        {/*<MuiPicker />*/}
        {/*<MuiTabs />*/}
        {/*<MuiTimeline />*/}
        {/*<MuiMasonry />*/}
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  );
}
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});
export default App;
