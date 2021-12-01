const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)? ", (name) => {
  console.log(`Cool! just a few more questions left ${name}!`);

  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`Who doesn't like ${activity}?!`);

    rl.question("What do you listen to while doing that? ", (listen) => {
      console.log(`${listen}? I better check that out`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
        console.log(`${meal} is the most important meal of the day in our hearts`);

        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          console.log(`${food} sounds good right about now!`);

          rl.question("Which sport is your absolute favourite? ", (sport) => {
            console.log(`${sport} season is the best season`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log("You sound like the Tony Hawk of That!");

              rl.question("Lets see what we've got here! Press Enter to continue", (answer) => {
                console.log(` You (${name}) like listening to ${listen} while ${activity}, like ${food} hopefully at ${meal}; ${sport} is your favourite sport and you are the best around at ${superpower}!`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
});


