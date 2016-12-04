
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('white').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('white').insert({
           course_id: '1', hole1: 491, hole2: 326, hole3: 418, hole4: 369, hole5: 151, hole6: 366, hole7: 174, hole8: 524, hole9: 388, hole10: 327, hole11: 493, hole12: 328, hole13: 505, hole14: 142, hole15: 321, hole16: 149, hole17: 354, hole18: 380,
        }),
        knex('white').insert({
           course_id: '2', hole1: 312, hole2: 518, hole3: 374, hole4: 285, hole5: 159, hole6: 411, hole7: 301, hole8: 148, hole9: 478, hole10: 388, hole11: 360, hole12: 474, hole13: 124, hole14: 289, hole15: 418, hole16: 295, hole17: 142, hole18: 549,
        }),
        knex('white').insert({
           course_id: '3', hole1: 276, hole2: 447, hole3: 386, hole4: 146, hole5: 146, hole6: 506, hole7: 347, hole8: 127, hole9: 373, hole10: 272, hole11: 387, hole12: 367, hole13: 156, hole14: 273, hole15: 426, hole16: 150, hole17: 396, hole18: 382,
        }),
        knex('white').insert({
           course_id: '4', hole1: 420, hole2: 432, hole3: 148, hole4: 448, hole5: 418, hole6: 332, hole7: 132, hole8: 536, hole9: 382, hole10: 442, hole11: 190, hole12: 406, hole13: 390, hole14: 554, hole15: 370, hole16: 352, hole17: 169, hole18: 468,
        }),
        knex('white').insert({
           course_id: '5', hole1: 491, hole2: 271, hole3: 119, hole4: 383, hole5: 99, hole6: 339, hole7: 279, hole8: 317, hole9: 513, hole10: 270, hole11: 126, hole12: 507, hole13: 331, hole14: 172, hole15: 480, hole16: 128, hole17: 276, hole18: 458,
        }),
        knex('white').insert({
           course_id: '6', hole1: 311, hole2: 397, hole3: 513, hole4: 195, hole5: 372, hole6: 271, hole7: 501, hole8: 157, hole9: 336, hole10: 282, hole11: 152, hole12: 455, hole13: 158, hole14: 486, hole15: 338, hole16: 316, hole17: 389, hole18: 486,
        }),
        knex('white').insert({
           course_id: '7', hole1: 363, hole2: 489, hole3: 291, hole4: 331, hole5: 185, hole6: 528, hole7: 151, hole8: 132, hole9: 380, hole10: 379, hole11: 498, hole12: 141, hole13: 597, hole14: 279, hole15: 469, hole16: 438, hole17: 157, hole18: 379,
        }),
        knex('white').insert({
           course_id: '8', hole1: 393, hole2: 555, hole3: 415, hole4: 355, hole5: 205, hole6: 439, hole7: 548, hole8: 403, hole9: 181, hole10: 356, hole11: 414, hole12: 489, hole13: 369, hole14: 194, hole15: 633, hole16: 180, hole17: 344, hole18: 424,
        }),
        knex('white').insert({
           course_id: '9', hole1: 367, hole2: 501, hole3: 142, hole4: 402, hole5: 225, hole6: 384, hole7: 310, hole8: 311, hole9: 111, hole10: 380, hole11: 121, hole12: 401, hole13: 130, hole14: 247, hole15: 314, hole16: 519, hole17: 146, hole18: 454,
        }),
        knex('white').insert({
           course_id: '10', hole1: 425, hole2: 112, hole3: 535, hole4: 380, hole5: 407, hole6: 125, hole7: 513, hole8: 324, hole9: 331, hole10: 385, hole11: 500, hole12: 168, hole13: 395, hole14: 169, hole15: 454, hole16: 428, hole17: 187, hole18: 527,
        }),
      ]);
    });
};
