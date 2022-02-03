function randomRange(ourMin, ourMax){
    return Math.floor(Math.random()*(ourMax-ourMin+1))+ ourMin;
}
let text;
let text2;
const p2 = document.querySelector('#p2');
const p = document.querySelector("#p1");
var value1 = randomRange(1,11);
switch (value1) {
    case 1:
        text = "Opportunity is missed by most people because it is dressed in overalls and looks like work."
        text2 = "-Thomas Edison"
        break;
    case 2:
        text = "Formal education will make you a living; self-education will make you a fortune."
        text2 = "-Jim Rohn"
        break;
    case 3:
        text = "Too many people spend money they earned..to buy things they don't want..to impress people that they don't like."
        text2 = "-Will Rogers"
        break;
    case 4:
        text = "A wise person should have money in their head, but not in their heart."
        text2 = "-Jonathan Swift"
        break;
    case 5:
         text = "Wealth consists not in having great possessions, but in having few wants."
         text2 = "-Epictetus"
        break;
    case 6:
        text = "Money often costs too much."
        text2 = "-Ralph Waldo Emerson"
        break;
    case 9:
        text = "Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each."
        text2 = "-Christopher Rice"
        break;
    case 7:
        text = "It's how you deal with failure that determines how you achieve success."
        text2 = "-David Feherty"
        break;
    case 8:
        text = "Frugality includes all the other virtues."
        text2 = "-Cicero"
        break;
    case 11:
        text = "An investment in knowledge pays the best interest."
        text2 = "-Benjamin Franklin"
        break;
    case 10:
        text = "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy."
        text2  = "-Warren Buffett"
        break;
    default:
        break;
}
p.innerHTML = text;
p2.innerHTML = text2;
console.log (value1)
