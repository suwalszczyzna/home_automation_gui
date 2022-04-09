import { defineStore } from "pinia";

export const useInfoStore = defineStore({
  id: "infoStore",
  state: () => ({
    coTemp: 0,
    waterTemp: 0,
    heaterStatus: false,
    valveStatus: false,
    washerStatus: false,
    washerPower: 0,
    dryerStatus: false,
    dryerPower: 0
  }),
  actions: {
    updateTemperatures() {
      fetch("http://192.168.1.25:5000/api/temperature")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.coTemp = data.co_temp;
          this.waterTemp = data.water_temp;
        })
        .catch((err) => {
          console.error(err);
          this.coTemp = -1;
          this.waterTemp = -1;
        });
    },
    updateSmartDeviceStatuses() {
      fetch("http://192.168.1.25:5000/api/smart_device_statuses")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.heaterStatus = data.heater;
          this.valveStatus = data.valve;
          this.washerStatus = data.washer.status;
          this.washerPower = data.washer.power;
          this.dryerStatus = data.dryer.status;
          this.dryerPower = data.dryer.power;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    updateStore() {
      this.updateSmartDeviceStatuses();
      this.updateTemperatures();
    },
  },
});
