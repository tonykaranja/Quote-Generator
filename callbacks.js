// function basic( callback ){
//   console.log( 'do something here' );
//
//   var result = 'i am the result of `do something` to be past to the callback';
//
//   // if callback exist execute it
//   callback && callback( result );
// }
//
// function callbacks_with_call( arg1, arg2, callback ){
//   console.log( 'do something here' );
//
//   var result1 = arg1.replace( 'argument', 'result' ),
//       result2 = arg2.replace( 'argument', 'result' );
//
//   this.data = 'i am some data that can be use for the callback function with `this` key word';
//
//   // if callback exist execute it
//   callback && callback.call( this, result1, result2 );
// }
//
// // this is similar to `callbacks_with_call`
// // the only difference is we use `apply` instead of `call`
// // so we need to pass arguments as an array
// function callbacks_with_apply( arg1, arg2, callback ){
//   console.log( 'do something here' );
//
//   var result1 = arg1.replace( 'argument', 'result' ),
//       result2 = arg2.replace( 'argument', 'result' );
//
//   this.data = 'i am some data that can be use for the callback function with `this` key word';
//
//   // if callback exist execute it
//   callback && callback.apply( this, [ result1, result2 ]);
// }
//
// basic( function( result ){
//   console.log( 'this callback is going to print out the result from the function `basic`' );
//   console.log( result );
// });
//
// console.log( '--------------------------------------------------------------------------------------' );
//
// ( function(){
//   var arg1 = 'i am argument1',
//       arg2 = 'i am argument2';
//
//   callbacks_with_call( arg1, arg2, function( result1, result2 ){
//     console.log( 'this callback is going to print out the results from the function `callbacks_with_call`' );
//     console.log( 'result1: ' + result1 );
//     console.log( 'result2: ' + result2 );
//     console.log( 'data from `callbacks_with_call`: ' + this.data );
//   });
// })();
//
// console.log( '--------------------------------------------------------------------------------------' );
//
// ( function(){
//   var arg1 = 'i am argument1',
//       arg2 = 'i am argument2';
//
//   callbacks_with_apply( arg1, arg2, function( result1, result2 ){
//     console.log( 'this callback is going to print out the result from the function `callbacks_with_apply`' );
//     console.log( 'result1: ' + result1 );
//     console.log( 'result2: ' + result2 );
//     console.log( 'data from `callbacks_with_apply`: ' + this.data );
//   });
// })();

function outer_scope(){
  var a = 'I am `a` from outer scope',
      b = 'I am `b` from outer scope';

  console.log( 'logging from outer scope before inner scope function declaration' );
  console.log( 'a: ' + a );
  console.log( 'b: ' + b );
  console.log( '------------------------------------------' );

  function inner_scope_1(){
    console.log( 'logging from inside function inner_scope_1 before variable declaration' );
    console.log( 'a: ' + a );
    a = 'I will overwrite the outer scope `a`';
    console.log( 'logging from inside function inner_scope_1 after variable declaration' );
    console.log( 'a: ' + a );
    console.log( '------------------------------------------' );
  }

  function inner_scope_2(){
    console.log( 'logging from inside function inner_scope_2 before variable declaration' );
    console.log( 'b: ' + b );
    var b = 'I will not overwrite the outer scope `b`';
    console.log( 'logging from inside function inner_scope_2 after variable declaration' );
    console.log( 'b: ' + b );
    console.log( '------------------------------------------' );
  }

  inner_scope_1();
  inner_scope_2();

  a = 'I will be the new `a`';
  b = 'I will be the new `b`';

  console.log( 'logging from outer scope after inner scope executed' );
  console.log( 'a: ' + a );
  console.log( 'b: ' + b );
  console.log( '------------------------------------------' );
}

outer_scope();
