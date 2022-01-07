# Soccer Moves Tracker

## Detect and count popular soccer moves during training

### Overview

If we don't have data then we don't know what to improve. So one way to improve my soccer skills is to see what moves I am not using much and try to work more on those.

With the help of [Tiny Motion Trainer](https://experiments.withgoogle.com/tiny-motion-trainer "Tiny Motion Trainer") I trained a model for kicks, up blocks, back passes, normal passes and drills.

Then I am uploading with BLE the model to the Arduino microcontroller. After successfully pairing the Chrome browser to the microcontroller each move that get detected is sent to a small ReactJS application. Cards and a Column chart shows my progress in real time. On my ToDo list is to save these results on a database for better comparison.

### Install and Usage

- Clone the project
- Run `npm i` in root and in web folder
- Run `npm run build:dev` in web folder
- In another terminal run `npm run serve`

---

### Screenshots

![Homepage](/readme_images/home.png)

![Connect](/readme_images/connect.png)

![Moves](/readme_images/moves.png)

### Notes

Of course the code quality is bad. It is written like I am developing for a 1 hour hackathon. Hopefully it will get better with future updates!

### Youtube

Project presentation: https://www.youtube.com/watch?v=Mq-AKVVnxHo

My channel is https://www.youtube.com/channel/UCpw2pE59pCl3epEksp1ycEg
Please subscribe if you want to support me 👍
