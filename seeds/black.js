
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('black').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('black').insert({
           course_id: '1',
           hole1: 525, hole2: 380, hole3: 477, hole4: 435, hole5: 185, hole6: 410, hole7: 225, hole8: 585, hole9: 414, hole10: 374, hole11: 545, hole12: 342, hole13: 534, hole14: 195, hole15: 343, hole16: 172, hole17: 404, hole18: 458,
        }),
        knex('black').insert({
           course_id: '2',
           hole1: 418, hole2: 573, hole3: 434, hole4: 326, hole5: 214, hole6: 462, hole7: 341, hole8: 174, hole9: 519, hole10: 416, hole11: 448, hole12: 529, hole13: 172, hole14: 346, hole15: 464, hole16: 374, hole17: 193, hole18: 639,
        }),
        knex('black').insert({
           course_id: '3',
           hole1: 380, hole2: 500, hole3: 462, hole4: 187, hole5: 392, hole6: 562, hole7: 398, hole8: 177, hole9: 461, hole10: 322, hole11: 484, hole12: 473, hole13: 201, hole14: 341, hole15: 548, hole16: 199, hole17: 486, hole18: 446,
        }),
        knex('black').insert({
           course_id: '4',
           hole1: 466, hole2: 470, hole3: 208, hole4: 510, hole5: 462, hole6: 372, hole7: 165, hole8: 580, hole9: 426, hole10: 490, hole11: 248, hole12: 445, hole13: 430, hole14: 619, hole15: 414, hole16: 402, hole17: 198, hole18: 530,
        }),
        knex('black').insert({
           course_id: '5',
           hole1: 575, hole2: 320, hole3: 151, hole4: 480, hole5: 96, hole6: 409, hole7: 377, hole8: 412, hole9: 659, hole10: 333, hole11: 186, hole12: 585, hole13: 394, hole14: 231, hole15: 565, hole16: 160, hole17: 356, hole18: 542,
        }),
        knex('black').insert({
           course_id: '6',
           hole1: 370, hole2: 453, hole3: 579, hole4: 231, hole5: 438, hole6: 295, hole7: 540, hole8: 190, hole9: 407, hole10: 345, hole11: 180, hole12: 495, hole13: 188, hole14: 562, hole15: 391, hole16: 375, hole17: 459, hole18: 513,
        }),
        knex('black').insert({
           course_id: '7',
           hole1: 415, hole2: 505, hole3: 341, hole4: 386, hole5: 228, hole6: 584, hole7: 183, hole8: 161, hole9: 428, hole10: 451, hole11: 558, hole12: 178, hole13: 624, hole14: 320, hole15: 523, hole16: 461, hole17: 177, hole18: 428,
        }),
        knex('black').insert({
           course_id: '8',
           hole1: 413, hole2: 626, hole3: 468, hole4: 419, hole5: 226, hole6: 496, hole7: 576, hole8: 428, hole9: 214, hole10: 426, hole11: 487, hole12: 564, hole13: 390, hole14: 233, hole15: 696, hole16: 198, hole17: 364, hole18: 452,
        }),
        knex('black').insert({
           course_id: '9',
           hole1: 453, hole2: 532, hole3: 199, hole4: 436, hole5: 349, hole6: 454, hole7: 393, hole8: 412, hole9: 207, hole10: 418, hole11: 153, hole12: 415, hole13: 174, hole14: 364, hole15: 398, hole16: 578, hole17: 204, hole18: 543,
        }),
        knex('black').insert({
           course_id: '10',
           hole1: 489, hole2: 144, hole3: 586, hole4: 424, hole5: 489, hole6: 188, hole7: 545, hole8: 355, hole9: 376, hole10: 437, hole11: 539, hole12: 219, hole13: 417, hole14: 229, hole15: 505, hole16: 476, hole17: 243, hole18: 568,
        }),
      ]);
    });
};
