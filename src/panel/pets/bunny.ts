import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Bunny extends BasePetType {
    label = 'bunny';
    static possibleColors = [PetColor.white];
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                // possibleNextStates: [States.sitIdle, States.sitIdle],
                possibleNextStates: [States.walkRight, States.runRight],
            },
            {
                state: States.walkRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.runRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.walkLeft,
                possibleNextStates: [
                    States.sitIdle,
                    States.walkRight,
                    States.runRight,
                ],
            },
            {
                state: States.runLeft,
                possibleNextStates: [
                    States.sitIdle,
                    States.walkRight,
                    States.runRight,
                ],
            },
            {
                state: States.chase,
                possibleNextStates: [States.idleWithBall],
            },
            {
                state: States.idleWithBall,
                possibleNextStates: [
                    States.walkRight,
                    States.walkLeft,
                    States.runLeft,
                    States.runRight,
                ],
            },
        ],
    };
    get emoji(): string {
        return '🐰';
    }
    get hello(): string {
        return `Hi! I'm a bunny!`;
    }
}

export const BUNNY_NAMES: ReadonlyArray<string> = [
    'Thumper',
    'Bugs',
    'Flopsy',
    'Lola',
    'Snowball',
    'Roger',
    'Buster',
    'Thumpzilla',
    'Chewbuncca',
    'Pikabun',
    'Peter',
    'Hoptimus Prime',
    'Fuzz Lightyear',
    'Harvey',
    'Cinnabun',
    'Carrot Top',
    'Snickers',
    'Puffball',
    'Mr. Fluffernutter',
    'Chomper',
    'Hopsalot',
    'Marshmallow',
    'Clover',
    'Bun Jovi',
    'Twitch',
    'Peanut',
    'Coco',
    'Twix',
    'Pudding',
    'Snugglebun',
    'Cottonball',
    'Bun Bun',
    'Cupcake',
];
