<template>
  <ion-page>
    <ion-header>
      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-between">
          <ion-icon
            :icon="chevronBackOutline"
            size="medium"
            color="primary"
            @click="goBack"
          ></ion-icon>
          <p class="heading">Cards</p>
          <!-- </ion-toolbar> -->
          <!-- <img src="../../assets/question.png" alt="" class="add-card" /> -->
          <ion-icon
            :icon="addCircle"
            color="success"
            @click="addCard"
            size="large"
          ></ion-icon>
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-segment value="card" id="segment" @click="changeSelection">
        <ion-segment-button value="card">
          <ion-icon :icon="card"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="list">
          <ion-icon :icon="list"></ion-icon>
        </ion-segment-button>
      </ion-segment>
      <div id="wrap-containers">
        <div
          id="wrap-card-container"
          class="ion-margin-top"
          v-for="card in cards"
          :key="card.number"
        >
          <div id="contain" v-if="isCard" class="ion-margin-top mySlides">
            <div id="container">
              <div class="box">
                <div class="type-section">
                  <div class="chip"></div>
                  <p class="type">{{ card.type }}</p>
                </div>
                <p id="number">
                  <span>{{ card.number.slice(0, 4) }}</span>
                  <span>{{ card.number.slice(4, 8) }}</span>
                  <span>{{ card.number.slice(8, 12) }}</span>
                  <span>{{ card.number.slice(12, 16) }}</span>
                </p>
              </div>
              <div class="validity">
                <p>
                  Valid Thru <span>{{ card.validity }}</span>
                </p>
              </div>
              <div class="detail">
                <p id="name">{{ card.name }}</p>
                <div class="logo">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ion-fab
          v-if="isCard"
          vertical="top"
          class="cards-btn-left"
          @click="plusDivs(-1)"
        >
          <ion-fab-button size="small" color="medium">
            <ion-icon :icon="chevronBack" size="small"></ion-icon>
          </ion-fab-button>
        </ion-fab>
        <ion-fab
          v-if="isCard"
          vertical="top"
          horizontal="end"
          class="cards-btn-right"
          @click="plusDivs(1)"
        >
          <ion-fab-button size="small" color="medium">
            <ion-icon :icon="chevronForward" size="small"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        <ion-list v-for="card in cards" :key="card.number">
          <ion-list-item v-if="isList">
            <ion-grid>
              <ion-row class="ion-align-items-baseline">
                <ion-col size="1">
                  <ion-icon :icon="cardOutline" color="primary"></ion-icon>
                </ion-col>
                <ion-col size="9">
                  <h4 class="card-name">{{ card.name }}</h4>
                  <p class="card-number">{{ card.number }}</p>
                </ion-col>
                <ion-col size="2">
                  <p class="validity">
                    Valid Thru <span>{{ card.validity }}</span>
                  </p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-list-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonGrid,
  IonRow,
  IonIcon,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonFab,
  IonFabButton,
  IonCol,
  IonList,
  IonListItem,
} from "@ionic/vue";
import {
  chevronBackOutline,
  addCircle,
  card,
  list,
  add,
  chevronBack,
  chevronForward,
  cardOutline,
} from "ionicons/icons";
export default {
  name: "AddCirclesPage",
  components: {
    IonPage,
    IonHeader,
    IonGrid,
    IonRow,
    // IonCol,
    IonIcon,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonFab,
    IonFabButton,
    IonCol,
    IonList,
    IonListItem,
  },
  data() {
    return {
      chevronBackOutline,
      chevronBack,
      addCircle,
      chevronForward,
      cardOutline,
      card,
      list,
      add,
      isCard: true,
      isList: false,
      slideIndex: 0,
      cards: [
        {
          number: "0123456789101112",
          name: "John Doe",
          validity: "11/20",
          type: "debit",
          cvv: "258",
        },
        {
          number: "0123456789101112",
          name: "Jane Doe",
          validity: "12/24",
          type: "credit",
          cvv: "311",
        },
        {
          number: "0123456789101112",
          name: "Precious Iruo",
          validity: "12/24",
          type: "credit",
          cvv: "311",
        },
      ],
    };
  },
  methods: {
    goBack: () => {
      history.go(-1);
    },
    addCard() {
      //
    },
    changeSelection(event) {
      let value = event.target.value;
      if (value === "card") {
        this.isCard = true;
        this.isList = false;
        this.slideIndex = 0;
      } else if (value === "list") {
        this.isCard = false;
        this.isList = true;
        this.slideIndex = 0;
      }
    },
    plusDivs(n) {
      this.showDivs((this.slideIndex += n));
    },
    showDivs(n) {
      var i;
      var x = document.querySelectorAll(".mySlides");
      if (n > x.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[this.slideIndex - 1].style.display = "block";
    },
  },
  mounted() {
    this.showDivs(this.slideIndex);
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  ion-header {
    /* display: none; */
    padding: 0px 300px !important;
    box-shadow: 6px 13px 3px -4px rgba(230, 230, 230, 0.33);
  }

  #wrap-containers {
    padding: 0px 300px !important;
  }

  .cards-btn-left {
    margin-left: 300px;
  }

  .cards-btn-right {
    margin-right: calc(300px * 2);
  }
}

ion-header {
  /* display: none; */
  padding: 10px 0px !important;
}

.heading {
  font-weight: 700;
}

#wrap-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#contain {
  background-image: url("../../assets/world_map_PNG9.png") !important;
  background-position: center !important;
  background-size: cover !important;
}

#container {
  width: 340px;
  height: 215px;
  border-radius: 10px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  padding: 1rem;
  background: #27047ac0;
  color: #fff;
}

.type-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  color: var(--ion-color-medium);
}

.box {
  width: 100%;
  height: 140px;
  padding: 1.5rem 0;
}

.chip {
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  background: linear-gradient(30deg, #ffdd00, #fbb034);
  border-radius: 5px;
  overflow: hidden;
}

.chip::before {
  grid-column: 1;
  grid-row: 1;
  content: "";
  width: 65px;
  height: 20px;
  border: 1px solid grey;
}

.chip::after {
  grid-column: 1;
  grid-row: 1;
  content: "";
  width: 38px;
  height: 21px;
  margin-left: 13px;
  transform: rotate(90deg);
  border-radius: 8px;
  border: 1px solid grey;
  background: linear-gradient(-60deg, #ffdd00, #fbb034);
}

#number {
  font-size: 1.3rem;
}

#number span {
  margin-right: 0.8rem;
}

.validity {
  font-size: 10px;
  display: flex;
  justify-content: center;
  margin: -25px 0px -25px -25px;
}

.validity span {
  font-size: 20px;
}

.detail {
  display: flex;
  justify-content: space-between;
}

.logo {
  display: grid;
  grid-template-columns: 1;
}

.logo span {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.logo span:nth-child(1) {
  background: #eb001b;
  grid-column: 1;
  grid-row: 1;
}

.logo span:nth-child(2) {
  grid-column: 1;
  grid-row: 1;
  margin-left: 20px;
  background: #ff5f00;
  opacity: 0.7;
  z-index: 2;
}

.cards-btn-left {
  display: flex;
  justify-self: end;
  margin-top: 25vh;
}

.cards-btn-right {
  display: flex;
  justify-self: end;
  margin-top: 25vh;
}
</style>
