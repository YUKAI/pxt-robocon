# Syogakusei ROBOCON 2020 command set library

This is a Microsoft MakeCode extension for Syogakusei ROBOCON 2020.

これは小学生ロボコン2020のために作られたMicrosoft MakeCode用の拡張機能です。

# Command details

## move （モータをうごかす）

`robocon.move(robocon.Motors.AAA, robocon.Direction.BBB, CCC)`

robocon.Motors.AAA could be from One to Four.  
robocon.Motors は 1 から 4 でせっていします。

robocon.Direction.BBB could be Forward or Backward.  
robocon.Direction.BBB は「まえ」か「うしろ」でせっていします。

CCC means power(0 - 100).  
CCC はパワーで 0 から 100 でせっていします。

## stop （モータをとめる）

`robocon.move(robocon.Motors.AAA)`

robocon.Motors.AAA could be from One to Four.  
robocon.Motors は 1 から 4 でせっていします。

## createDisplay （4けたディスプレイ たんしXXとたんしXX）

It create a display connecting to pin DDD and pin EEE.  
たんしDDDとたんしEEEをつないだディスプレイをせっていします。

```
let dis1 = main.createDisplay(DDD, EEE)
```

DDD, EEE could be DigitalPins.  
DDD, EEE はデジタルピンです。

## set （4けたディスプレイのあかるさをかえる）

```
dis1.set(FFF)
```

FFF could be from 1 to 7.
FFF は 1 から 7 でせっていします。

## measure （ちょうおんぱセンサをこうしんする）

`robocon.measure(DigitalPin.GGG)`

DigitalPin.DDD could be the pin you want to get value from.  
DigitalPin.DDD はあたいをとりたいデジタルピンです。

## show （4けたディスプレイにひょうじする）

`robocon.show(DigitalPin.HHH)`

DigitalPin.DDD could be the pin you want to get value from.  
DigitalPin.DDD はあたいをみたいピンのばんごうをせっていします。

# License

MIT

## Supported targets

* for PXT/microbit

