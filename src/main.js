import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/main.scss";

const app = createApp(App);

// Components.
import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";

app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

// Font Awesome.
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faUserCheck, faClock, faArrowRightFromBracket, faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faUserCheck, faClock, faArrowRightFromBracket, faBarsStaggered, faXmark);
app.component("font-awesome-icon", FontAwesomeIcon);

// Create App.
app.use(router);
app.use(store);

app.mount("#app");
