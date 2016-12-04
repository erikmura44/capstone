
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('red').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('red').insert({
           course_id: '1', hole1: 414, hole2: 280, hole3: 336, hole4: 308, hole5: 110, hole6: 312, hole7: 118, hole8: 442, hole9: 330, hole10: 275, hole11: 399, hole12: 281, hole13: 426, hole14: 111, hole15: 275, hole16: 119, hole17: 311, hole18: 283,
        }),
        knex('red').insert({
           course_id: '2', hole1: 286, hole2: 467, hole3: 334, hole4: 276, hole5: 138, hole6: 369, hole7: 271, hole8: 130, hole9: 472, hole10: 333, hole11: 326, hole12: 411, hole13: 108, hole14: 241, hole15: 376, hole16: 269, hole17: 112, hole18: 524,
        }),
        knex('red').insert({
           course_id: '3', hole1: 256, hole2: 387, hole3: 364, hole4: 126, hole5: 284, hole6: 352, hole7: 325, hole8: 99, hole9: 319, hole10: 198, hole11: 299, hole12: 343, hole13: 135, hole14: 227, hole15: 404, hole16: 126, hole17: 287, hole18: 298,
        }),
        knex('red').insert({
           course_id: '4', hole1: 387, hole2: 368, hole3: 143, hole4: 412, hole5: 386, hole6: 302, hole7: 114, hole8: 504, hole9: 370, hole10: 400, hole11: 162, hole12: 378, hole13: 358, hole14: 514, hole15: 341, hole16: 319, hole17: 136, hole18: 438,
        }),
        knex('red').insert({
           course_id: '5', hole1: 447, hole2: 231, hole3: 91, hole4: 330, hole5: 91, hole6: 277, hole7: 226, hole8: 274, hole9: 458, hole10: 202, hole11: 99, hole12: 462, hole13: 259, hole14: 98, hole15: 409, hole16: 91, hole17: 218, hole18: 418,
        }),
        knex('red').insert({
           course_id: '6', hole1: 270, hole2: 370, hole3: 473, hole4: 173, hole5: 343, hole6: 250, hole7: 465, hole8: 142, hole9: 289, hole10: 251, hole11: 130, hole12: 393, hole13: 129, hole14: 447, hole15: 318, hole16: 292, hole17: 361, hole18: 457,
        }),
        knex('red').insert({
           course_id: '7', hole1: 342, hole2: 444, hole3: 267, hole4: 299, hole5: 119, hole6: 449, hole7: 109, hole8: 109, hole9: 308, hole10: 342, hole11: 449, hole12: 114, hole13: 488, hole14: 238, hole15: 372, hole16: 345, hole17: 124, hole18: 327,
        }),
        knex('red').insert({
           course_id: '8', hole1: 350, hole2: 519, hole3: 399, hole4: 303, hole5: 179, hole6: 365, hole7: 502, hole8: 342, hole9: 131, hole10: 327, hole11: 379, hole12: 460, hole13: 343, hole14: 155, hole15: 580, hole16: 173, hole17: 322, hole18: 401,
        }),
        knex('red').insert({
           course_id: '9', hole1: 367, hole2: 501, hole3: 142, hole4: 402, hole5: 225, hole6: 384, hole7: 310, hole8: 311, hole9: 111, hole10: 380, hole11: 121, hole12: 401, hole13: 130, hole14: 247, hole15: 314, hole16: 519, hole17: 146, hole18: 454,
        }),
        knex('red').insert({
           course_id: '10', hole1: 360, hole2: 97, hole3: 498, hole4: 301, hole5: 395, hole6: 106, hole7: 421, hole8: 283, hole9: 287, hole10: 369, hole11: 451, hole12: 107, hole13: 353, hole14: 141, hole15: 375, hole16: 384, hole17: 168, hole18: 447,
        }),
      ]);
    });
};
