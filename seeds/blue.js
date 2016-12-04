
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blue').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blue').insert({
           course_id: '1', hole1: 507, hole2: 346, hole3: 445, hole4: 402, hole5: 162, hole6: 393, hole7: 200, hole8: 550, hole9: 409, hole10: 342, hole11: 516, hole12: 337, hole13: 519, hole14: 165, hole15: 338, hole16: 167, hole17: 373, hole18: 409,
        }),
        knex('blue').insert({
           course_id: '2', hole1: 344, hole2: 534, hole3: 404, hole4: 318, hole5: 182, hole6: 417, hole7: 332, hole8: 164, hole9: 506, hole10: 402, hole11: 419, hole12: 510, hole13: 141, hole14: 313, hole15: 436, hole16: 331, hole17: 184, hole18: 602,
        }),
        knex('blue').insert({
           course_id: '3', hole1: 351, hole2: 476, hole3: 429, hole4: 160, hole5: 367, hole6: 547, hole7: 373, hole8: 152, hole9: 428, hole10: 296, hole11: 443, hole12: 455, hole13: 178, hole14: 298, hole15: 519, hole16: 174, hole17: 424, hole18: 419,
        }),
        knex('blue').insert({
           course_id: '4', hole1: 436, hole2: 446, hole3: 176, hole4: 480, hole5: 437, hole6: 349, hole7: 142, hole8: 552, hole9: 396, hole10: 460, hole11: 216, hole12: 424, hole13: 406, hole14: 591, hole15: 386, hole16: 369, hole17: 180, hole18: 504,
        }),
        knex('blue').insert({
           course_id: '5', hole1: 544, hole2: 297, hole3: 135, hole4: 426, hole5: 95, hole6: 372, hole7: 338, hole8: 372, hole9: 570, hole10: 305, hole11: 154, hole12: 545, hole13: 381, hole14: 205, hole15: 536, hole16: 141, hole17: 320, hole18: 505,
        }),
        knex('blue').insert({
           course_id: '6', hole1: 350, hole2: 429, hole3: 562, hole4: 210, hole5: 404, hole6: 286, hole7: 527, hole8: 178, hole9: 366, hole10: 315, hole11: 160, hole12: 467, hole13: 171, hole14: 535, hole15: 369, hole16: 351, hole17: 422, hole18: 500,
        }),
        knex('blue').insert({
           course_id: '7', hole1: 388, hole2: 495, hole3: 320, hole4: 364, hole5: 210, hole6: 549, hole7: 171, hole8: 137, hole9: 407, hole10: 423, hole11: 524, hole12: 165, hole13: 613, hole14: 296, hole15: 503, hole16: 439, hole17: 171, hole18: 408,
        }),
        knex('blue').insert({
           course_id: '8', hole1: 408, hole2: 597, hole3: 442, hole4: 382, hole5: 226, hole6: 467, hole7: 576, hole8: 428, hole9: 214, hole10: 385, hole11: 451, hole12: 539, hole13: 390, hole14: 233, hole15: 652, hole16: 198, hole17: 364, hole18: 452,
        }),
        knex('blue').insert({
           course_id: '9', hole1: 431, hole2: 525, hole3: 188, hole4: 413, hole5: 333, hole6: 416, hole7: 354, hole8: 383, hole9: 177, hole10: 398, hole11: 141, hole12: 399, hole13: 174, hole14: 356, hole15: 361, hole16: 549, hole17: 177, hole18: 494,
        }),
        knex('blue').insert({
           course_id: '10', hole1: 443, hole2: 127, hole3: 555, hole4: 397, hole5: 440, hole6: 147, hole7: 527, hole8: 337, hole9: 368, hole10: 398, hole11: 515, hole12: 191, hole13: 408, hole14: 179, hole15: 478, hole16: 456, hole17: 216, hole18: 539,
        }),
      ]);
    });
};
