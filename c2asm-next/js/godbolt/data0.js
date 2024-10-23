// Id             | Name
let GODBOLT_LANGUAGES = `
csharp         | C#
fsharp         | F#
vb             | Visual Basic
il             | IL
cuda           | CUDA C++
c              | C
c++            | C++
fortran        | Fortran
assembly       | Assembly
gimple         | GIMPLE
objc++         | Objective-C++
go             | Go
objc           | Objective-C
android-java   | Android Java
android-kotlin | Android Kotlin
rust           | Rust
circle         | C++ (Circle)
circt          | CIRCT
hlsl           | HLSL
cppx           | Cppx
crystal        | Crystal
dart           | Dart
erlang         | Erlang
carbon         | Carbon
cobol          | COBOL
hook           | Hook
hylo           | Hylo
julia          | Julia
tablegen       | LLVM TableGen
cppx_blue      | Cppx-Blue
cppx_gold      | Cppx-Gold
mlir           | MLIR
analysis       | Analysis
python         | Python
racket         | Racket
ruby           | Ruby
ada            | Ada
typescript     | TypeScript Native
v              | V
vala           | Vala
wasm           | WASM
cpp_for_opencl | C++ for OpenCL
openclc        | OpenCL C
c3             | C3
llvm           | LLVM IR
cmakescript    | CMakeScript
cpp2_cppfront  | Cpp2-cppfront
d              | D
ispc           | ispc
java           | Java
kotlin         | Kotlin
llvm_mir       | LLVM MIR
pascal         | Pascal
nim            | Nim
pony           | Pony
scala          | Scala
snowball       | Snowball
solidity       | Solidity
spice          | Spice
javascript     | Javascript
clean          | Clean
modula2        | Modula-2
haskell        | Haskell
ocaml          | OCaml
swift          | Swift
zig            | Zig
`
// Compiler Name                         | Name
let GODBOLT_COMPILERS = `
dotnettrunkcsharp                     | .NET (main)
dotnettrunkfsharp                     | .NET (main)
dotnettrunkvb                         | .NET (main)
dotnet6011csharp                      | .NET 6.0.110
dotnet6011fsharp                      | .NET 6.0.110
dotnet6011vb                          | .NET 6.0.110
dotnet6014csharp                      | .NET 6.0.113
dotnet6014fsharp                      | .NET 6.0.113
dotnet6014vb                          | .NET 6.0.113
dotnet6018csharp                      | .NET 6.0.116
dotnet6018fsharp                      | .NET 6.0.116
dotnet6018vb                          | .NET 6.0.116
dotnet701csharp                       | .NET 7.0.100
dotnet701fsharp                       | .NET 7.0.100
dotnet701vb                           | .NET 7.0.100
dotnet703csharp                       | .NET 7.0.102
dotnet703fsharp                       | .NET 7.0.102
dotnet703vb                           | .NET 7.0.102
dotnet707csharp                       | .NET 7.0.105
dotnet707fsharp                       | .NET 7.0.105
dotnet707vb                           | .NET 7.0.105
dotnettrunkcsharpcoreclr              | .NET CoreCLR (main)
dotnettrunkfsharpcoreclr              | .NET CoreCLR (main)
dotnettrunkilcoreclr                  | .NET CoreCLR (main)
dotnettrunkvbcoreclr                  | .NET CoreCLR (main)
dotnet70csharpcoreclr                 | .NET CoreCLR 7.0
dotnet70fsharpcoreclr                 | .NET CoreCLR 7.0
dotnet70ilcoreclr                     | .NET CoreCLR 7.0
dotnet70vbcoreclr                     | .NET CoreCLR 7.0
dotnet80csharpcoreclr                 | .NET CoreCLR 8.0
dotnet80fsharpcoreclr                 | .NET CoreCLR 8.0
dotnet80ilcoreclr                     | .NET CoreCLR 8.0
dotnet80vbcoreclr                     | .NET CoreCLR 8.0
dotnettrunkcsharpcrossgen2            | .NET Crossgen2 (main)
dotnettrunkfsharpcrossgen2            | .NET Crossgen2 (main)
dotnettrunkilcrossgen2                | .NET Crossgen2 (main)
dotnettrunkvbcrossgen2                | .NET Crossgen2 (main)
dotnet60csharpcrossgen2               | .NET Crossgen2 6.0
dotnet60fsharpcrossgen2               | .NET Crossgen2 6.0
dotnet60ilcrossgen2                   | .NET Crossgen2 6.0
dotnet60vbcrossgen2                   | .NET Crossgen2 6.0
dotnet70csharpcrossgen2               | .NET Crossgen2 7.0
dotnet70fsharpcrossgen2               | .NET Crossgen2 7.0
dotnet70ilcrossgen2                   | .NET Crossgen2 7.0
dotnet70vbcrossgen2                   | .NET Crossgen2 7.0
dotnet80csharpcrossgen2               | .NET Crossgen2 8.0
dotnet80fsharpcrossgen2               | .NET Crossgen2 8.0
dotnet80ilcrossgen2                   | .NET Crossgen2 8.0
dotnet80vbcrossgen2                   | .NET Crossgen2 8.0
dotnettrunkcsharpildasm               | .NET IL Disassembler (main)
dotnettrunkfsharpildasm               | .NET IL Disassembler (main)
dotnettrunkilildasm                   | .NET IL Disassembler (main)
dotnettrunkvbildasm                   | .NET IL Disassembler (main)
dotnettrunkcsharpmono                 | .NET Mono (main)
dotnettrunkfsharpmono                 | .NET Mono (main)
dotnettrunkilmono                     | .NET Mono (main)
dotnettrunkvbmono                     | .NET Mono (main)
dotnettrunkcsharpnativeaot            | .NET NativeAOT (main)
dotnettrunkfsharpnativeaot            | .NET NativeAOT (main)
dotnettrunkilnativeaot                | .NET NativeAOT (main)
dotnettrunkvbnativeaot                | .NET NativeAOT (main)
cuclang1000                           | 10.0.0 sm_75 CUDA-10.2
cuclang1001                           | 10.0.1 sm_75 CUDA-10.2
cuclang1100                           | 11.0.0 sm_75 CUDA-10.2
cc65_217                              | 6502 cc65 2.17
cc65_218                              | 6502 cc65 2.18
cc65_219                              | 6502 cc65 2.19
cc65_trunk                            | 6502 cc65 trunk
gcc6502_1110                          | 6502-c++ 11.1.0
farm64g1050                           | AARCH64 gfortran 10.5.0
farm64g1140                           | AARCH64 gfortran 11.4.0
farm64g1210                           | AARCH64 gfortran 12.1.0
farm64g1220                           | AARCH64 gfortran 12.2.0
farm64g1230                           | AARCH64 gfortran 12.3.0
farm64g1240                           | AARCH64 gfortran 12.4.0
farm64g1310                           | AARCH64 gfortran 13.1.0
farm64g1320                           | AARCH64 gfortran 13.2.0
farm64g1330                           | AARCH64 gfortran 13.3.0
farm64g1410                           | AARCH64 gfortran 14.1.0
farm64g1420                           | AARCH64 gfortran 14.2.0
farm64g494                            | AARCH64 gfortran 4.9.4
farm64g550                            | AARCH64 gfortran 5.5.0
farm64g640                            | AARCH64 gfortran 6.4
farm64g730                            | AARCH64 gfortran 7.3
farm64g820                            | AARCH64 gfortran 8.2
gnuasarm64g630                        | AArch64 binutils 2.28
gnuasarm64g820                        | AArch64 binutils 2.31.1
gnuasarm64g930                        | AArch64 binutils 2.33.1
gnuasarm64g1020                       | AArch64 binutils 2.35.1
gnuasarm64g1320                       | AArch64 binutils 2.38
farmg1050                             | ARM (32bit) gfortran 10.5.0
farmg1140                             | ARM (32bit) gfortran 11.4.0
farmg1210                             | ARM (32bit) gfortran 12.1.0
farmg1220                             | ARM (32bit) gfortran 12.2.0
farmg1230                             | ARM (32bit) gfortran 12.3.0
farmg1240                             | ARM (32bit) gfortran 12.4.0
farmg1310                             | ARM (32bit) gfortran 13.1.0
farmg1320                             | ARM (32bit) gfortran 13.2.0
farmg1330                             | ARM (32bit) gfortran 13.3.0
farmg1410                             | ARM (32bit) gfortran 14.1.0
farmg1420                             | ARM (32bit) gfortran 14.2.0
farmg640                              | ARM (32bit) gfortran 6.4
farmg730                              | ARM (32bit) gfortran 7.3
farmg820                              | ARM (32bit) gfortran 8.2
arm1020                               | ARM GCC 10.2.0
carm1020                              | ARM GCC 10.2.0 (linux)
gimplearm1020                         | ARM GCC 10.2.0 (linux)
carm1021                              | ARM GCC 10.2.1 (none)
gimplearm1021                         | ARM GCC 10.2.1 (none)
arm1030                               | ARM GCC 10.3.0
carm1030                              | ARM GCC 10.3.0 (linux)
gimplearm1030                         | ARM GCC 10.3.0 (linux)
carm1031_07                           | ARM GCC 10.3.1 (2021.07 none)
gimplearm1031_07                      | ARM GCC 10.3.1 (2021.07 none)
carm1031_10                           | ARM GCC 10.3.1 (2021.10 none)
gimplearm1031_10                      | ARM GCC 10.3.1 (2021.10 none)
arm1040                               | ARM GCC 10.4.0
armg1050                              | ARM GCC 10.5.0
carmg1050                             | ARM GCC 10.5.0
gimplearmg1050                        | ARM GCC 10.5.0
arm1100                               | ARM GCC 11.1.0
carm1100                              | ARM GCC 11.1.0 (linux)
gimplearm1100                         | ARM GCC 11.1.0 (linux)
arm1120                               | ARM GCC 11.2.0
carm1120                              | ARM GCC 11.2.0 (linux)
gimplearm1120                         | ARM GCC 11.2.0 (linux)
carm1121                              | ARM GCC 11.2.1 (none)
gimplearm1121                         | ARM GCC 11.2.1 (none)
arm1130                               | ARM GCC 11.3.0
carm1130                              | ARM GCC 11.3.0 (linux)
gimplearm1130                         | ARM GCC 11.3.0 (linux)
armg1140                              | ARM GCC 11.4.0
carmg1140                             | ARM GCC 11.4.0
gimplearmg1140                        | ARM GCC 11.4.0
arm1210                               | ARM GCC 12.1.0
carm1210                              | ARM GCC 12.1.0 (linux)
gimplearm1210                         | ARM GCC 12.1.0 (linux)
armg1220                              | ARM GCC 12.2.0
carmg1220                             | ARM GCC 12.2.0 (linux)
gimplearmg1220                        | ARM GCC 12.2.0 (linux)
armg1230                              | ARM GCC 12.3.0
carmg1230                             | ARM GCC 12.3.0
objcpparmg1230                        | ARM GCC 12.3.0
gimplearmg1230                        | ARM GCC 12.3.0
armg1240                              | ARM GCC 12.4.0
carmg1240                             | ARM GCC 12.4.0
objcpparmg1240                        | ARM GCC 12.4.0
armg1310                              | ARM GCC 13.1.0
objcpparmg1310                        | ARM GCC 13.1.0
carmg1310                             | ARM GCC 13.1.0 (linux)
gimplearmg1310                        | ARM GCC 13.1.0 (linux)
armg1320                              | ARM GCC 13.2.0
carmg1320                             | ARM GCC 13.2.0
objcpparmg1320                        | ARM GCC 13.2.0
gimplearmg1320                        | ARM GCC 13.2.0
armug1320                             | ARM GCC 13.2.0 (unknown-eabi)
carmug1320                            | ARM GCC 13.2.0 (unknown-eabi)
gimplearmug1320                       | ARM GCC 13.2.0 (unknown-eabi)
armg1330                              | ARM GCC 13.3.0
carmg1330                             | ARM GCC 13.3.0
objcpparmg1330                        | ARM GCC 13.3.0
gimplearmg1330                        | ARM GCC 13.3.0
armug1330                             | ARM GCC 13.3.0 (unknown-eabi)
carmug1330                            | ARM GCC 13.3.0 (unknown-eabi)
gimplearmug1330                       | ARM GCC 13.3.0 (unknown-eabi)
armg1410                              | ARM GCC 14.1.0
carmg1410                             | ARM GCC 14.1.0
objcpparmg1410                        | ARM GCC 14.1.0
gimplearmg1410                        | ARM GCC 14.1.0
armug1410                             | ARM GCC 14.1.0 (unknown-eabi)
carmug1410                            | ARM GCC 14.1.0 (unknown-eabi)
gimplearmug1410                       | ARM GCC 14.1.0 (unknown-eabi)
armg1420                              | ARM GCC 14.2.0
carmg1420                             | ARM GCC 14.2.0
objcpparmg1420                        | ARM GCC 14.2.0
gimplearmg1420                        | ARM GCC 14.2.0
armug1420                             | ARM GCC 14.2.0 (unknown-eabi)
carmug1420                            | ARM GCC 14.2.0 (unknown-eabi)
gimplearmug1420                       | ARM GCC 14.2.0 (unknown-eabi)
armg454                               | ARM GCC 4.5.4
carmg454                              | ARM GCC 4.5.4 (linux)
armg464                               | ARM GCC 4.6.4
carmg464                              | ARM GCC 4.6.4 (linux)
armhfg54                              | ARM GCC 5.4
carmhfg54                             | ARM GCC 5.4 (linux)
carm541                               | ARM GCC 5.4.1 (none)
armg630                               | ARM GCC 6.3.0
carmg630                              | ARM GCC 6.3.0 (linux)
armg640                               | ARM GCC 6.4.0
carmg640                              | ARM GCC 6.4.0 (linux)
carm710                               | ARM GCC 7.2.1 (none)
armg730                               | ARM GCC 7.3.0
carmg730                              | ARM GCC 7.3.0 (linux)
armg750                               | ARM GCC 7.5.0
carmg750                              | ARM GCC 7.5.0 (linux)
armg820                               | ARM GCC 8.2.0
carmce820                             | ARM GCC 8.2.0 (WinCE)
carmg820                              | ARM GCC 8.2.0 (linux)
carm831                               | ARM GCC 8.3.1 (none)
armg850                               | ARM GCC 8.5.0
carmg850                              | ARM GCC 8.5.0 (linux)
carm921                               | ARM GCC 9.2.1 (none)
gimplearm921                          | ARM GCC 9.2.1 (none)
arm930                                | ARM GCC 9.3.0
carm930                               | ARM GCC 9.3.0 (linux)
gimplearm930                          | ARM GCC 9.3.0 (linux)
arm940                                | ARM GCC 9.4.0
arm950                                | ARM GCC 9.5.0
armgtrunk                             | ARM GCC trunk
carmgtrunk                            | ARM GCC trunk (linux)
gimplearmgtrunk                       | ARM GCC trunk (linux)
gnuasarmg464                          | ARM binutils 2.25
gnuasarmg630                          | ARM binutils 2.28
gnuasarmg820                          | ARM binutils 2.31.1
arm_gltip                             | ARM gc (tip)
arm_gl114                             | ARM gc 1.14
arm_gl115                             | ARM gc 1.15
arm_gl116                             | ARM gc 1.16
arm_gl117                             | ARM gc 1.17
arm_gl118                             | ARM gc 1.18
arm_gl119                             | ARM gc 1.19
arm_gl120                             | ARM gc 1.20
arm_gl121                             | ARM gc 1.21
arm_gl122                             | ARM gc 1.22.1
gnuasarm1020                          | ARM gcc 10.2 (linux)
arm1021                               | ARM gcc 10.2.1 (none)
arm1031_07                            | ARM gcc 10.3.1 (2021.07 none)
arm1031_10                            | ARM gcc 10.3.1 (2021.10 none)
arm1121                               | ARM gcc 11.2.1 (none)
objcarmg1220                          | ARM gcc 12.2.0
objcarmg1230                          | ARM gcc 12.3.0
objcarmg1240                          | ARM gcc 12.4.0
objcarmg1310                          | ARM gcc 13.1.0
objcarmg1320                          | ARM gcc 13.2.0
objcarmg1330                          | ARM gcc 13.3.0
objcarmg1410                          | ARM gcc 14.1.0
objcarmg1420                          | ARM gcc 14.2.0
arm541                                | ARM gcc 5.4.1 (none)
arm710                                | ARM gcc 7.2.1 (none)
armce820                              | ARM gcc 8.2 (WinCE)
arm831                                | ARM gcc 8.3.1 (none)
arm921                                | ARM gcc 9.2.1 (none)
gnuasarm930                           | ARM gcc 9.3 (linux)
objcarmgtrunk                         | ARM gcc trunk (linux)
gccgoarm1220                          | ARM gccgo 12.2.0
gccgoarm1230                          | ARM gccgo 12.3.0
gccgoarm1240                          | ARM gccgo 12.4.0
gccgoarm1310                          | ARM gccgo 13.1.0
gccgoarm1320                          | ARM gccgo 13.2.0
gccgoarm1330                          | ARM gccgo 13.3.0
gccgoarm1410                          | ARM gccgo 14.1.0
gccgoarm1420                          | ARM gccgo 14.2.0
cl19_2015_u3_arm                      | ARM msvc v19.0 (WINE)
ccl19_2015_u3_arm                     | ARM msvc v19.0 (WINE)
cl19_arm                              | ARM msvc v19.10 (WINE)
ccl19_arm                             | ARM msvc v19.10 (WINE)
cl_new_arm32                          | ARM msvc v19.14 (WINE)
ccl_new_arm32                         | ARM msvc v19.14 (WINE)
carm64g1020                           | ARM64 GCC 10.2.0
gimplearm64g1020                      | ARM64 GCC 10.2.0
carm64g1030                           | ARM64 GCC 10.3.0
gimplearm64g1030                      | ARM64 GCC 10.3.0
carm64g1040                           | ARM64 GCC 10.4.0
gimplearm64g1040                      | ARM64 GCC 10.4.0
carm64g1050                           | ARM64 GCC 10.5.0
gimplearm64g1050                      | ARM64 GCC 10.5.0
carm64g1100                           | ARM64 GCC 11.1.0
gimplearm64g1100                      | ARM64 GCC 11.1.0
carm64g1120                           | ARM64 GCC 11.2.0
gimplearm64g1120                      | ARM64 GCC 11.2.0
carm64g1130                           | ARM64 GCC 11.3.0
gimplearm64g1130                      | ARM64 GCC 11.3.0
carm64g1140                           | ARM64 GCC 11.4.0
gimplearm64g1140                      | ARM64 GCC 11.4.0
carm64g1210                           | ARM64 GCC 12.1.0
gimplearm64g1210                      | ARM64 GCC 12.1.0
carm64g1220                           | ARM64 GCC 12.2.0
objcarm64g1220                        | ARM64 GCC 12.2.0
gimplearm64g1220                      | ARM64 GCC 12.2.0
carm64g1230                           | ARM64 GCC 12.3.0
objcarm64g1230                        | ARM64 GCC 12.3.0
objcpparm64g1230                      | ARM64 GCC 12.3.0
gimplearm64g1230                      | ARM64 GCC 12.3.0
carm64g1240                           | ARM64 GCC 12.4.0
objcarm64g1240                        | ARM64 GCC 12.4.0
objcpparm64g1240                      | ARM64 GCC 12.4.0
carm64g1310                           | ARM64 GCC 13.1.0
objcarm64g1310                        | ARM64 GCC 13.1.0
objcpparm64g1310                      | ARM64 GCC 13.1.0
gimplearm64g1310                      | ARM64 GCC 13.1.0
carm64g1320                           | ARM64 GCC 13.2.0
objcarm64g1320                        | ARM64 GCC 13.2.0
objcpparm64g1320                      | ARM64 GCC 13.2.0
gimplearm64g1320                      | ARM64 GCC 13.2.0
carm64g1330                           | ARM64 GCC 13.3.0
objcarm64g1330                        | ARM64 GCC 13.3.0
objcpparm64g1330                      | ARM64 GCC 13.3.0
gimplearm64g1330                      | ARM64 GCC 13.3.0
carm64g1410                           | ARM64 GCC 14.1.0
objcarm64g1410                        | ARM64 GCC 14.1.0
objcpparm64g1410                      | ARM64 GCC 14.1.0
gimplearm64g1410                      | ARM64 GCC 14.1.0
carm64g1420                           | ARM64 GCC 14.2.0
objcarm64g1420                        | ARM64 GCC 14.2.0
objcpparm64g1420                      | ARM64 GCC 14.2.0
gimplearm64g1420                      | ARM64 GCC 14.2.0
carm64g494                            | ARM64 GCC 4.9.4
caarchg54                             | ARM64 GCC 5.4
carm64g550                            | ARM64 GCC 5.5.0
carm64g630                            | ARM64 GCC 6.3
carm64g640                            | ARM64 GCC 6.4.0
carm64g730                            | ARM64 GCC 7.3.0
carm64g750                            | ARM64 GCC 7.5.0
carm64g820                            | ARM64 GCC 8.2.0
carm64g850                            | ARM64 GCC 8.5.0
carm64g930                            | ARM64 GCC 9.3.0
gimplearm64g930                       | ARM64 GCC 9.3.0
carm64g940                            | ARM64 GCC 9.4.0
gimplearm64g940                       | ARM64 GCC 9.4.0
carm64g950                            | ARM64 GCC 9.5.0
gimplearm64g950                       | ARM64 GCC 9.5.0
carm64gtrunk                          | ARM64 GCC trunk
objcarm64gtrunk                       | ARM64 GCC trunk
gimplearm64gtrunk                     | ARM64 GCC trunk
carm64gm101a1                         | ARM64 Morello GCC 10.1.0 Alpha 1
gimplearm64gm101a1                    | ARM64 Morello GCC 10.1.0 Alpha 1
carm64gm101a2                         | ARM64 Morello GCC 10.1.2 Alpha 2
gimplearm64gm101a2                    | ARM64 Morello GCC 10.1.2 Alpha 2
arm64gm101a2                          | ARM64 Morello gcc 10.1 Alpha 2
arm64_gltip                           | ARM64 gc (tip)
arm64_gl114                           | ARM64 gc 1.14
arm64_gl115                           | ARM64 gc 1.15
arm64_gl116                           | ARM64 gc 1.16
arm64_gl117                           | ARM64 gc 1.17
arm64_gl118                           | ARM64 gc 1.18
arm64_gl119                           | ARM64 gc 1.19
arm64_gl120                           | ARM64 gc 1.20
arm64_gl121                           | ARM64 gc 1.21
arm64_gl122                           | ARM64 gc 1.22.1
arm64g1020                            | ARM64 gcc 10.2
arm64g1030                            | ARM64 gcc 10.3
arm64g1040                            | ARM64 gcc 10.4
arm64g1050                            | ARM64 gcc 10.5.0
arm64g1100                            | ARM64 gcc 11.1
arm64g1120                            | ARM64 gcc 11.2
arm64g1130                            | ARM64 gcc 11.3
arm64g1140                            | ARM64 gcc 11.4.0
arm64g1210                            | ARM64 gcc 12.1
arm64g1220                            | ARM64 gcc 12.2.0
arm64g1230                            | ARM64 gcc 12.3.0
arm64g1240                            | ARM64 gcc 12.4.0
arm64g1310                            | ARM64 gcc 13.1.0
arm64g1320                            | ARM64 gcc 13.2.0
arm64g1330                            | ARM64 gcc 13.3.0
arm64g1410                            | ARM64 gcc 14.1.0
arm64g1420                            | ARM64 gcc 14.2.0
arm64g494                             | ARM64 gcc 4.9.4
aarchg54                              | ARM64 gcc 5.4
arm64g550                             | ARM64 gcc 5.5.0
arm64g630                             | ARM64 gcc 6.3
arm64g640                             | ARM64 gcc 6.4
arm64g730                             | ARM64 gcc 7.3
arm64g750                             | ARM64 gcc 7.5
arm64g820                             | ARM64 gcc 8.2
arm64g850                             | ARM64 gcc 8.5
arm64g930                             | ARM64 gcc 9.3
arm64g940                             | ARM64 gcc 9.4
arm64g950                             | ARM64 gcc 9.5
arm64gtrunk                           | ARM64 gcc trunk
gccgoarm641220                        | ARM64 gccgo 12.2.0
gccgoarm641230                        | ARM64 gccgo 12.3.0
gccgoarm641240                        | ARM64 gccgo 12.4.0
gccgoarm641310                        | ARM64 gccgo 13.1.0
gccgoarm641320                        | ARM64 gccgo 13.2.0
gccgoarm641330                        | ARM64 gccgo 13.3.0
gccgoarm641410                        | ARM64 gccgo 14.1.0
gccgoarm641420                        | ARM64 gccgo 14.2.0
cl_new_arm64                          | ARM64 msvc v19.14 (WINE)
ccl_new_arm64                         | ARM64 msvc v19.14 (WINE)
gnuasarmhfg54                         | ARMhf binutils 2.28
java-dex2oat-3310                     | ART dex2oat aml_art_331012050 (Oct 2022)
kotlin-dex2oat-3310                   | ART dex2oat aml_art_331012050 (Oct 2022)
java-dex2oat-3411                     | ART dex2oat aml_art_341110060 (Nov 2023)
kotlin-dex2oat-3411                   | ART dex2oat aml_art_341110060 (Nov 2023)
java-dex2oat-3413                     | ART dex2oat aml_art_341311100 (Jan 2024)
kotlin-dex2oat-3413                   | ART dex2oat aml_art_341311100 (Jan 2024)
java-dex2oat-3414                     | ART dex2oat aml_art_341411300 (Feb 2024)
kotlin-dex2oat-3414                   | ART dex2oat aml_art_341411300 (Feb 2024)
java-dex2oat-3415                     | ART dex2oat aml_art_341514410 (Mar 2024)
kotlin-dex2oat-3415                   | ART dex2oat aml_art_341514410 (Mar 2024)
java-dex2oat-3416                     | ART dex2oat aml_art_341615020 (Apr 2024)
kotlin-dex2oat-3416                   | ART dex2oat aml_art_341615020 (Apr 2024)
java-dex2oat-3417                     | ART dex2oat aml_art_341711000 (May 2024)
kotlin-dex2oat-3417                   | ART dex2oat aml_art_341711000 (May 2024)
java-dex2oat-3418                     | ART dex2oat aml_art_341810020 (Jun 2024)
kotlin-dex2oat-3418                   | ART dex2oat aml_art_341810020 (Jun 2024)
java-dex2oat-latest                   | ART dex2oat latest
kotlin-dex2oat-latest                 | ART dex2oat latest
avrg1030                              | AVR gcc 10.3.0
cavrg1030                             | AVR gcc 10.3.0
gimpleavrg1030                        | AVR gcc 10.3.0
avrg1100                              | AVR gcc 11.1.0
cavrg1100                             | AVR gcc 11.1.0
gimpleavrg1100                        | AVR gcc 11.1.0
avrg1210                              | AVR gcc 12.1.0
cavrg1210                             | AVR gcc 12.1.0
gimpleavrg1210                        | AVR gcc 12.1.0
avrg1220                              | AVR gcc 12.2.0
cavrg1220                             | AVR gcc 12.2.0
gimpleavrg1220                        | AVR gcc 12.2.0
avrg1230                              | AVR gcc 12.3.0
cavrg1230                             | AVR gcc 12.3.0
gimpleavrg1230                        | AVR gcc 12.3.0
avrg1240                              | AVR gcc 12.4.0
cavrg1240                             | AVR gcc 12.4.0
avrg1310                              | AVR gcc 13.1.0
cavrg1310                             | AVR gcc 13.1.0
gimpleavrg1310                        | AVR gcc 13.1.0
avrg1320                              | AVR gcc 13.2.0
cavrg1320                             | AVR gcc 13.2.0
gimpleavrg1320                        | AVR gcc 13.2.0
avrg1330                              | AVR gcc 13.3.0
cavrg1330                             | AVR gcc 13.3.0
gimpleavrg1330                        | AVR gcc 13.3.0
avrg1410                              | AVR gcc 14.1.0
cavrg1410                             | AVR gcc 14.1.0
gimpleavrg1410                        | AVR gcc 14.1.0
avrg1420                              | AVR gcc 14.2.0
cavrg1420                             | AVR gcc 14.2.0
gimpleavrg1420                        | AVR gcc 14.2.0
avrg454                               | AVR gcc 4.5.4
cavrg454                              | AVR gcc 4.5.4
avrg464                               | AVR gcc 4.6.4
cavrg464                              | AVR gcc 4.6.4
avrg540                               | AVR gcc 5.4.0
cavrg540                              | AVR gcc 5.4.0
avrg920                               | AVR gcc 9.2.0
cavrg920                              | AVR gcc 9.2.0
gimpleavrg920                         | AVR gcc 9.2.0
avrg930                               | AVR gcc 9.3.0
cavrg930                              | AVR gcc 9.3.0
gimpleavrg930                         | AVR gcc 9.3.0
arduinomega189                        | Arduino Mega (1.8.9)
carduinomega189                       | Arduino Mega (1.8.9)
arduinouno189                         | Arduino Uno (1.8.9)
carduinouno189                        | Arduino Uno (1.8.9)
bpfclangtrunk                         | BPF clang (trunk)
cbpfclangtrunk                        | BPF clang (trunk)
bpfclang1300                          | BPF clang 13.0.0
cbpfclang1300                         | BPF clang 13.0.0
bpfclang1400                          | BPF clang 14.0.0
cbpfclang1400                         | BPF clang 14.0.0
bpfclang1500                          | BPF clang 15.0.0
cbpfclang1500                         | BPF clang 15.0.0
bpfclang1600                          | BPF clang 16.0.0
cbpfclang1600                         | BPF clang 16.0.0
bpfclang1701                          | BPF clang 17.0.1
cbpfclang1701                         | BPF clang 17.0.1
bpfclang1810                          | BPF clang 18.1.0
cbpfclang1810                         | BPF clang 18.1.0
bpfclang1910                          | BPF clang 19.1.0
rustbpfgtrunk                         | BPF gcc (trunk)
bpfg1310                              | BPF gcc 13.1.0
cbpfg1310                             | BPF gcc 13.1.0
gimplebpfg1310                        | BPF gcc 13.1.0
bpfg1320                              | BPF gcc 13.2.0
cbpfg1320                             | BPF gcc 13.2.0
gimplebpfg1320                        | BPF gcc 13.2.0
bpfg1330                              | BPF gcc 13.3.0
cbpfg1330                             | BPF gcc 13.3.0
gimplebpfg1330                        | BPF gcc 13.3.0
bpfg1410                              | BPF gcc 14.1.0
cbpfg1410                             | BPF gcc 14.1.0
gimplebpfg1410                        | BPF gcc 14.1.0
cbpfg1420                             | BPF gcc 14.2.0
gimplebpfg1420                        | BPF gcc 14.2.0
bpfgtrunk                             | BPF gcc trunk
cbpfgtrunk                            | BPF gcc trunk
gimplebpfgtrunk                       | BPF gcc trunk
beebasm109                            | BeebAsm 1.09
circle128                             | Build 128
circle129                             | Build 129
circle131                             | Build 131
circtopt-trunk                        | CIRCT opt (trunk)
chibicc-trunk                         | Chibicc 2020-12-07
hlsl_clang_trunk                      | Clang (trunk)
cppx010                               | CppCon 2017
cppx_20180922                         | CppCon 2018
crystal029                            | Crystal 0.29.0
crystal030                            | Crystal 0.30.1
crystal031                            | Crystal 0.31.1
crystal032                            | Crystal 0.32.1
crystal033                            | Crystal 0.33.0
crystal034                            | Crystal 0.34.0
crystal035                            | Crystal 0.35.1
crystal036                            | Crystal 0.36.1
crystal10                             | Crystal 1.0.0
crystal11                             | Crystal 1.1.1
crystal1101                           | Crystal 1.10.1
crystal1111                           | Crystal 1.11.1
crystal1122                           | Crystal 1.12.2
crystal1133                           | Crystal 1.13.3
crystal1140                           | Crystal 1.14.0
crystal122                            | Crystal 1.2.2
crystal132                            | Crystal 1.3.2
crystal141                            | Crystal 1.4.1
crystal151                            | Crystal 1.5.1
crystal162                            | Crystal 1.6.2
crystal173                            | Crystal 1.7.3
crystal182                            | Crystal 1.8.2
crystal192                            | Crystal 1.9.2
dxc_trunk                             | DXC (trunk)
dxc_1_6_2112                          | DXC 1.6.2112
dxc_1_7_2207                          | DXC 1.7.2207
dxc_1_7_2212                          | DXC 1.7.2212
dxc_1_7_2308                          | DXC 1.7.2308
dxc_1_8_2306                          | DXC 1.8.2306-preview
dxc_1_8_2403                          | DXC 1.8.2403
dxc_1_8_2403_1                        | DXC 1.8.2403.1
dxc_1_8_2403_2                        | DXC 1.8.2403.2
dxc_1_8_2405                          | DXC 1.8.2405
dxc_1_8_2407                          | DXC 1.8.2407
dart2105                              | Dart 2.10.5
dart2124                              | Dart 2.12.4
dart2134                              | Dart 2.13.4
dart2144                              | Dart 2.14.4
dart2151                              | Dart 2.15.1
dart2161                              | Dart 2.16.1
dart2171                              | Dart 2.17.1
dart2185                              | Dart 2.18.5
dart2196                              | Dart 2.19.6
dart284                               | Dart 2.8.4
dart293                               | Dart 2.9.3
dart302                               | Dart 3.0.2
dart313                               | Dart 3.1.3
dart322                               | Dart 3.2.2
dart334                               | Dart 3.3.4
dart344                               | Dart 3.4.4
dart353                               | Dart 3.5.3
dartdev                               | Dart dev
edg-experimental-reflection           | EDG (experimental reflection)
edg-6_5-default-13                    | EDG 6.5
edg-6_5-gcc-13                        | EDG 6.5 (GNU mode gcc 13)
edg-6_6-default-13                    | EDG 6.6
edg-6_6-gcc-13                        | EDG 6.6 (GNU mode gcc 13)
erl2416                               | Erlang 24.1.6
erl2622                               | Erlang 26.2.2
erl2622asm                            | Erlang Asm 26.2.2
carbon-trunk                          | Explorer (trunk)
frc2019                               | FRC 2019
cfrc2019                              | FRC 2019
frc2020                               | FRC 2020
cfrc2020                              | FRC 2020
frc2023                               | FRC 2023
cfrc2023                              | FRC 2023
gcccobolsnapshot                      | GCC (cobol+master)
gnucobol22                            | GnuCOBOL 2.2
gnucobol31                            | GnuCOBOL 3.1
gnucobol32                            | GnuCOBOL 3.2
gnucobol32rc2                         | GnuCOBOL 3.2 rc2
hppag1420                             | HPPA gcc 14.2.0
chppag1420                            | HPPA gcc 14.2.0
objcpphppag1420                       | HPPA gcc 14.2.0
gimplehppag1420                       | HPPA gcc 14.2.0
fhppag1420                            | HPPA gfortran 14.2.0
hook010                               | Hook 0.1.0
hylotrunk                             | Hylo (trunk)
julia_1_10_0                          | Julia 1.10.0
julia_1_7_3                           | Julia 1.7.3
julia_1_8_5                           | Julia 1.8.5
julia_1_9_3                           | Julia 1.9.3
julia_nightly                         | Julia nightly
ck1cg741                              | K1C gcc 7.4
k1cg741                               | K1C gcc 7.4 (obsolete)
ck1cg750                              | K1C gcc 7.5
k1cg750                               | K1C gcc 7.5 (obsolete)
kvxg750_v410                          | KVX ACB 4.1.0 (GCC 7.5.0)
ckvxg750_v410                         | KVX ACB 4.1.0 (GCC 7.5.0)
kvxg750                               | KVX ACB 4.1.0-cd1 (GCC 7.5.0)
ckvxg750                              | KVX ACB 4.1.0-cd1 (GCC 7.5.0)
kvxg1031_v4100                        | KVX ACB 4.10.0 (GCC 10.3.1)
ckvxg1031_v4100                       | KVX ACB 4.10.0 (GCC 10.3.1)
gimplekvxg1031_v4100                  | KVX ACB 4.10.0 (GCC 10.3.1)
kvxg1031_v4111                        | KVX ACB 4.11.1 (GCC 10.3.1)
ckvxg1031_v4111                       | KVX ACB 4.11.1 (GCC 10.3.1)
gimplekvxg1031_v4111                  | KVX ACB 4.11.1 (GCC 10.3.1)
kvxg1130_v4120                        | KVX ACB 4.12.0 (GCC 11.3.0)
ckvxg1130_v4120                       | KVX ACB 4.12.0 (GCC 11.3.0)
gimplekvxg1130_v4120                  | KVX ACB 4.12.0 (GCC 11.3.0)
kvxg750_v420                          | KVX ACB 4.2.0 (GCC 7.5.0)
ckvxg750_v420                         | KVX ACB 4.2.0 (GCC 7.5.0)
kvxg750_v430                          | KVX ACB 4.3.0 (GCC 7.5.0)
ckvxg750_v430                         | KVX ACB 4.3.0 (GCC 7.5.0)
kvxg750_v440                          | KVX ACB 4.4.0 (GCC 7.5.0)
ckvxg750_v440                         | KVX ACB 4.4.0 (GCC 7.5.0)
kvxg941_v460                          | KVX ACB 4.6.0 (GCC 9.4.1)
ckvxg941_v460                         | KVX ACB 4.6.0 (GCC 9.4.1)
gimplekvxg941_v460                    | KVX ACB 4.6.0 (GCC 9.4.1)
kvxg941_v480                          | KVX ACB 4.8.0 (GCC 9.4.1)
ckvxg941_v480                         | KVX ACB 4.8.0 (GCC 9.4.1)
gimplekvxg941_v480                    | KVX ACB 4.8.0 (GCC 9.4.1)
kvxg941_v490                          | KVX ACB 4.9.0 (GCC 9.4.1)
ckvxg941_v490                         | KVX ACB 4.9.0 (GCC 9.4.1)
gimplekvxg941_v490                    | KVX ACB 4.9.0 (GCC 9.4.1)
kvxg1221_v500                         | KVX ACB 5.0.0 (GCC 12.2.1)
ckvxg1221_v500                        | KVX ACB 5.0.0 (GCC 12.2.1)
lc3-trunk                             | LC3 (trunk)
llvmtblgen_trunk                      | LLVM TableGen (trunk)
llvmtblgen1701                        | LLVM TableGen 17.0.1
llvmtblgen1810                        | LLVM TableGen 18.1.0
llvmtblgen1910                        | LLVM TableGen 19.1.0
floongarch64g1220                     | LOONGARCH64 gfortran 12.2.0
floongarch64g1230                     | LOONGARCH64 gfortran 12.3.0
floongarch64g1240                     | LOONGARCH64 gfortran 12.4.0
floongarch64g1310                     | LOONGARCH64 gfortran 13.1.0
floongarch64g1320                     | LOONGARCH64 gfortran 13.2.0
floongarch64g1330                     | LOONGARCH64 gfortran 13.3.0
floongarch64g1410                     | LOONGARCH64 gfortran 14.1.0
floongarch64g1420                     | LOONGARCH64 gfortran 14.2.0
circlelatest                          | Latest
cppx_blue_trunk                       | Latest trunk
cppx_gold_trunk                       | Latest trunk
loongarch64-clangtrunk                | LoongArch64 clang (trunk)
loongarch64-clang1701                 | LoongArch64 clang 17.0.1
loongarch64-clang1810                 | LoongArch64 clang 18.1.0
loongarch64-clang1910                 | LoongArch64 clang 19.1.0
cm68kclangtrunk                       | M68K clang (trunk)
m68kg1310                             | M68K gcc 13.1.0
cm68kg1310                            | M68K gcc 13.1.0
gimplem68kg1310                       | M68K gcc 13.1.0
m68kg1320                             | M68K gcc 13.2.0
cm68kg1320                            | M68K gcc 13.2.0
gimplem68kg1320                       | M68K gcc 13.2.0
m68kg1330                             | M68K gcc 13.3.0
cm68kg1330                            | M68K gcc 13.3.0
gimplem68kg1330                       | M68K gcc 13.3.0
m68kg1410                             | M68K gcc 14.1.0
cm68kg1410                            | M68K gcc 14.1.0
gimplem68kg1410                       | M68K gcc 14.1.0
m68kg1420                             | M68K gcc 14.2.0
cm68kg1420                            | M68K gcc 14.2.0
gimplem68kg1420                       | M68K gcc 14.2.0
m68kclangtrunk                        | M68k clang (trunk)
objcppmipselg1230                     | MIPS (EL) GCC 12.3.0
objcppmipselg1240                     | MIPS (EL) GCC 12.4.0
objcppmipselg1310                     | MIPS (EL) GCC 13.1.0
objcppmipselg1320                     | MIPS (EL) GCC 13.2.0
objcppmipselg1330                     | MIPS (EL) GCC 13.3.0
objcppmipselg1410                     | MIPS (EL) GCC 14.1.0
objcppmipselg1420                     | MIPS (EL) GCC 14.2.0
objcppmipsg1230                       | MIPS GCC 12.3.0
objcppmipsg1240                       | MIPS GCC 12.4.0
objcppmipsg1310                       | MIPS GCC 13.1.0
objcppmipsg1320                       | MIPS GCC 13.2.0
objcppmipsg1330                       | MIPS GCC 13.3.0
objcppmipsg1410                       | MIPS GCC 14.1.0
objcppmipsg1420                       | MIPS GCC 14.2.0
mips_gltip                            | MIPS gc (tip)
mips_gl114                            | MIPS gc 1.14
mips_gl115                            | MIPS gc 1.15
mips_gl116                            | MIPS gc 1.16
mips_gl117                            | MIPS gc 1.17
mips_gl118                            | MIPS gc 1.18
mips_gl119                            | MIPS gc 1.19
mips_gl120                            | MIPS gc 1.20
mips_gl121                            | MIPS gc 1.21
mips_gl122                            | MIPS gc 1.22.1
gccgomips1220                         | MIPS gccgo 12.2.0
gccgomips1230                         | MIPS gccgo 12.3.0
gccgomips1240                         | MIPS gccgo 12.4.0
gccgomips1310                         | MIPS gccgo 13.1.0
gccgomips1320                         | MIPS gccgo 13.2.0
gccgomips1330                         | MIPS gccgo 13.3.0
gccgomips1410                         | MIPS gccgo 14.1.0
gccgomips1420                         | MIPS gccgo 14.2.0
fmipsg1210                            | MIPS gfortran 12.1.0
fmipsg1220                            | MIPS gfortran 12.2.0
fmipsg1230                            | MIPS gfortran 12.3.0
fmipsg1240                            | MIPS gfortran 12.4.0
fmipsg1310                            | MIPS gfortran 13.1.0
fmipsg1320                            | MIPS gfortran 13.2.0
fmipsg1330                            | MIPS gfortran 13.3.0
fmipsg1410                            | MIPS gfortran 14.1.0
fmipsg1420                            | MIPS gfortran 14.2.0
fmipsg494                             | MIPS gfortran 4.9.4
fmipsg550                             | MIPS gfortran 5.5.0
fmipsg950                             | MIPS gfortran 9.5.0
objcppmips64elg1230                   | MIPS64 (EL) GCC 12.3.0
objcppmips64elg1240                   | MIPS64 (EL) GCC 12.4.0
objcppmips64elg1310                   | MIPS64 (EL) GCC 13.1.0
objcppmips64elg1320                   | MIPS64 (EL) GCC 13.2.0
objcppmips64elg1330                   | MIPS64 (EL) GCC 13.3.0
objcppmips64elg1410                   | MIPS64 (EL) GCC 14.1.0
objcppmips64elg1420                   | MIPS64 (EL) GCC 14.2.0
objcppmips64g1230                     | MIPS64 GCC 12.3.0
objcppmips64g1240                     | MIPS64 GCC 12.4.0
objcppmips64g1310                     | MIPS64 GCC 13.1.0
objcppmips64g1320                     | MIPS64 GCC 13.2.0
objcppmips64g1330                     | MIPS64 GCC 13.3.0
objcppmips64g1410                     | MIPS64 GCC 14.1.0
objcppmips64g1420                     | MIPS64 GCC 14.2.0
mips64_gltip                          | MIPS64 gc (tip)
mips64_gl114                          | MIPS64 gc 1.14
mips64_gl115                          | MIPS64 gc 1.15
mips64_gl116                          | MIPS64 gc 1.16
mips64_gl117                          | MIPS64 gc 1.17
mips64_gl118                          | MIPS64 gc 1.18
mips64_gl119                          | MIPS64 gc 1.19
mips64_gl120                          | MIPS64 gc 1.20
mips64_gl121                          | MIPS64 gc 1.21
mips64_gl122                          | MIPS64 gc 1.22.1
objcmips64g1220                       | MIPS64 gcc 12.2.0
objcmips64g1230                       | MIPS64 gcc 12.3.0
objcmips64g1240                       | MIPS64 gcc 12.4.0
objcmips64g1310                       | MIPS64 gcc 13.1.0
objcmips64g1320                       | MIPS64 gcc 13.2.0
objcmips64g1330                       | MIPS64 gcc 13.3.0
objcmips64g1410                       | MIPS64 gcc 14.1.0
objcmips64g1420                       | MIPS64 gcc 14.2.0
gccgomips641220                       | MIPS64 gccgo 12.2.0
gccgomips641230                       | MIPS64 gccgo 12.3.0
gccgomips641240                       | MIPS64 gccgo 12.4.0
gccgomips641310                       | MIPS64 gccgo 13.1.0
gccgomips641320                       | MIPS64 gccgo 13.2.0
gccgomips641330                       | MIPS64 gccgo 13.3.0
gccgomips641410                       | MIPS64 gccgo 14.1.0
gccgomips641420                       | MIPS64 gccgo 14.2.0
fmips64g1210                          | MIPS64 gfortran 12.1.0
fmips64g1220                          | MIPS64 gfortran 12.2.0
fmips64g1230                          | MIPS64 gfortran 12.3.0
fmips64g1240                          | MIPS64 gfortran 12.4.0
fmips64g1310                          | MIPS64 gfortran 13.1.0
fmips64g1320                          | MIPS64 gfortran 13.2.0
fmips64g1330                          | MIPS64 gfortran 13.3.0
fmips64g1410                          | MIPS64 gfortran 14.1.0
fmips64g1420                          | MIPS64 gfortran 14.2.0
fmips64g494                           | MIPS64 gfortran 4.9.4
fmips64g550                           | MIPS64 gfortran 5.5.0
fmips64g950                           | MIPS64 gfortran 9.5.0
gccgomips64el1220                     | MIPS64EL gccgo 12.2.0
gccgomips64el1230                     | MIPS64EL gccgo 12.3.0
gccgomips64el1240                     | MIPS64EL gccgo 12.4.0
gccgomips64el1310                     | MIPS64EL gccgo 13.1.0
gccgomips64el1320                     | MIPS64EL gccgo 13.2.0
gccgomips64el1330                     | MIPS64EL gccgo 13.3.0
gccgomips64el1410                     | MIPS64EL gccgo 14.1.0
gccgomips64el1420                     | MIPS64EL gccgo 14.2.0
mips64le_gltip                        | MIPS64LE gc (tip)
mips64le_gl114                        | MIPS64LE gc 1.14
mips64le_gl115                        | MIPS64LE gc 1.15
mips64le_gl116                        | MIPS64LE gc 1.16
mips64le_gl117                        | MIPS64LE gc 1.17
mips64le_gl118                        | MIPS64LE gc 1.18
mips64le_gl119                        | MIPS64LE gc 1.19
mips64le_gl120                        | MIPS64LE gc 1.20
mips64le_gl121                        | MIPS64LE gc 1.21
mips64le_gl122                        | MIPS64LE gc 1.22.1
fmips64elg1210                        | MIPS64el gfortran 12.1.0
fmips64elg1220                        | MIPS64el gfortran 12.2.0
fmips64elg1230                        | MIPS64el gfortran 12.3.0
fmips64elg1240                        | MIPS64el gfortran 12.4.0
fmips64elg1310                        | MIPS64el gfortran 13.1.0
fmips64elg1320                        | MIPS64el gfortran 13.2.0
fmips64elg1330                        | MIPS64el gfortran 13.3.0
fmips64elg1410                        | MIPS64el gfortran 14.1.0
fmips64elg1420                        | MIPS64el gfortran 14.2.0
fmips64elg494                         | MIPS64el gfortran 4.9.4
fmips64elg550                         | MIPS64el gfortran 5.5.0
fmips64elg950                         | MIPS64el gfortran 9.5.0
gccgomipsel1220                       | MIPSEL gccgo 12.2.0
gccgomipsel1230                       | MIPSEL gccgo 12.3.0
gccgomipsel1240                       | MIPSEL gccgo 12.4.0
gccgomipsel1310                       | MIPSEL gccgo 13.1.0
gccgomipsel1320                       | MIPSEL gccgo 13.2.0
gccgomipsel1330                       | MIPSEL gccgo 13.3.0
gccgomipsel1410                       | MIPSEL gccgo 14.1.0
gccgomipsel1420                       | MIPSEL gccgo 14.2.0
mipsle_gltip                          | MIPSLE gc (tip)
mipsle_gl114                          | MIPSLE gc 1.14
mipsle_gl115                          | MIPSLE gc 1.15
mipsle_gl116                          | MIPSLE gc 1.16
mipsle_gl117                          | MIPSLE gc 1.17
mipsle_gl118                          | MIPSLE gc 1.18
mipsle_gl119                          | MIPSLE gc 1.19
mipsle_gl120                          | MIPSLE gc 1.20
mipsle_gl121                          | MIPSLE gc 1.21
mipsle_gl122                          | MIPSLE gc 1.22.1
fmipselg1210                          | MIPSel gfortran 12.1.0
fmipselg1220                          | MIPSel gfortran 12.2.0
fmipselg1230                          | MIPSel gfortran 12.3.0
fmipselg1240                          | MIPSel gfortran 12.4.0
fmipselg1310                          | MIPSel gfortran 13.1.0
fmipselg1320                          | MIPSel gfortran 13.2.0
fmipselg1330                          | MIPSel gfortran 13.3.0
fmipselg1410                          | MIPSel gfortran 14.1.0
fmipselg1420                          | MIPSel gfortran 14.2.0
fmipselg494                           | MIPSel gfortran 4.9.4
fmipselg550                           | MIPSel gfortran 5.5.0
fmipselg950                           | MIPSel gfortran 9.5.0
mliropttrunk                          | MLIR opt (trunk)
mliropt1400                           | MLIR opt 14.0.0
mliropt1405                           | MLIR opt 14.0.5
mliropt1600                           | MLIR opt 16.0.0
mlirtranslatetrunk                    | MLIR translate (trunk)
mlirtranslate1400                     | MLIR translate 14.0.0
mlirtranslate1405                     | MLIR translate 14.0.5
mlirtranslate1600                     | MLIR translate 16.0.0
mrisc32-gcc-trunk                     | MRISC32 gcc (trunk)
cmrisc32-gcc-trunk                    | MRISC32 gcc (trunk)
cmsp430g1210                          | MSP430 gcc 12.1.0
gimplemsp430g1210                     | MSP430 gcc 12.1.0
cmsp430g1220                          | MSP430 gcc 12.2.0
gimplemsp430g1220                     | MSP430 gcc 12.2.0
cmsp430g1230                          | MSP430 gcc 12.3.0
gimplemsp430g1230                     | MSP430 gcc 12.3.0
cmsp430g1240                          | MSP430 gcc 12.4.0
cmsp430g1310                          | MSP430 gcc 13.1.0
gimplemsp430g1310                     | MSP430 gcc 13.1.0
cmsp430g1320                          | MSP430 gcc 13.2.0
gimplemsp430g1320                     | MSP430 gcc 13.2.0
cmsp430g1330                          | MSP430 gcc 13.3.0
gimplemsp430g1330                     | MSP430 gcc 13.3.0
cmsp430g1410                          | MSP430 gcc 14.1.0
gimplemsp430g1410                     | MSP430 gcc 14.1.0
cmsp430g1420                          | MSP430 gcc 14.2.0
gimplemsp430g1420                     | MSP430 gcc 14.2.0
msp430g453                            | MSP430 gcc 4.5.3
cmsp430g453                           | MSP430 gcc 4.5.3
msp430g530                            | MSP430 gcc 5.3.0
cmsp430g530                           | MSP430 gcc 5.3.0
msp430g621                            | MSP430 gcc 6.2.1
cmsp430g621                           | MSP430 gcc 6.2.1
mingw64_ucrt_clang_1403               | MinGW clang 14.0.3
cmingw64_ucrt_clang_1403              | MinGW clang 14.0.3
mingw64_ucrt_clang_1406               | MinGW clang 14.0.6
cmingw64_ucrt_clang_1406              | MinGW clang 14.0.6
mingw64_ucrt_clang_1507               | MinGW clang 15.0.7
cmingw64_ucrt_clang_1507              | MinGW clang 15.0.7
mingw64_ucrt_clang_1600               | MinGW clang 16.0.0
cmingw64_ucrt_clang_1600              | MinGW clang 16.0.0
mingw64_ucrt_clang_1602               | MinGW clang 16.0.2
cmingw64_ucrt_clang_1602              | MinGW clang 16.0.2
mingw64_ucrt_gcc_1130                 | MinGW gcc 11.3.0
cmingw64_ucrt_gcc_1130                | MinGW gcc 11.3.0
mingw64_ucrt_gcc_1210                 | MinGW gcc 12.1.0
cmingw64_ucrt_gcc_1210                | MinGW gcc 12.1.0
mingw64_ucrt_gcc_1220                 | MinGW gcc 12.2.0
cmingw64_ucrt_gcc_1220                | MinGW gcc 12.2.0
mingw64_ucrt_gcc_1310                 | MinGW gcc 13.1.0
cmingw64_ucrt_gcc_1310                | MinGW gcc 13.1.0
nasm21202                             | NASM 2.12.02
nasm21302                             | NASM 2.13.02
nasm21303                             | NASM 2.13.03
nasm21402                             | NASM 2.14.02
nasm21601                             | NASM 2.16.01
nvcc100                               | NVCC 10.0.130
nvcc101                               | NVCC 10.1.105
nvcc101u1                             | NVCC 10.1.168
nvcc101u2                             | NVCC 10.1.243
nvcc102                               | NVCC 10.2.89
nvcc11                                | NVCC 11.0.2
nvcc11u1                              | NVCC 11.0.3
nvcc111                               | NVCC 11.1.0
nvcc111u1                             | NVCC 11.1.1
nvcc112                               | NVCC 11.2.0
nvcc112u1                             | NVCC 11.2.1
nvcc112u2                             | NVCC 11.2.2
nvcc113                               | NVCC 11.3.0
nvcc113u1                             | NVCC 11.3.1
nvcc114                               | NVCC 11.4.0
nvcc114u1                             | NVCC 11.4.1
nvcc114u2                             | NVCC 11.4.2
nvcc114u3                             | NVCC 11.4.3
nvcc114u4                             | NVCC 11.4.4
nvcc115                               | NVCC 11.5.0
nvcc115u1                             | NVCC 11.5.1
nvcc115u2                             | NVCC 11.5.2
nvcc116                               | NVCC 11.6.0
nvcc116u1                             | NVCC 11.6.1
nvcc116u2                             | NVCC 11.6.2
nvcc117                               | NVCC 11.7.0
nvcc117u1                             | NVCC 11.7.1
nvcc118                               | NVCC 11.8.0
nvcc120                               | NVCC 12.0.0
nvcc120u1                             | NVCC 12.0.1
nvcc121                               | NVCC 12.1.0
nvcc122u1                             | NVCC 12.2.1
nvcc123u1                             | NVCC 12.3.1
nvcc124u1                             | NVCC 12.4.1
nvcc125u1                             | NVCC 12.5.1
nvcc126u1                             | NVCC 12.6.1
nvcc91                                | NVCC 9.1.85
nvcc92                                | NVCC 9.2.88
nvrtc11                               | NVRTC 11.0.2
nvrtc11u1                             | NVRTC 11.0.3
nvrtc111                              | NVRTC 11.1.0
nvrtc111u1                            | NVRTC 11.1.1
nvrtc112                              | NVRTC 11.2.0
nvrtc112u1                            | NVRTC 11.2.1
nvrtc112u2                            | NVRTC 11.2.2
nvrtc113                              | NVRTC 11.3.0
nvrtc113u1                            | NVRTC 11.3.1
nvrtc114                              | NVRTC 11.4.0
nvrtc114u1                            | NVRTC 11.4.1
nvrtc115                              | NVRTC 11.5.0
nvrtc115u1                            | NVRTC 11.5.1
nvrtc115u2                            | NVRTC 11.5.2
nvrtc116                              | NVRTC 11.6.0
nvrtc116u1                            | NVRTC 11.6.1
nvrtc116u2                            | NVRTC 11.6.2
nvrtc117                              | NVRTC 11.7.0
nvrtc117u1                            | NVRTC 11.7.1
nvrtc118                              | NVRTC 11.8.0
nvrtc120                              | NVRTC 12.0.0
nvrtc120u1                            | NVRTC 12.0.1
nvrtc121                              | NVRTC 12.1.0
osacatrunk                            | OSACA (0.6.1)
objcppcg1220                          | POWER GCC 12.2.0
objcppcg1230                          | POWER GCC 12.3.0
objcppcg1240                          | POWER GCC 12.4.0
objcppcg1310                          | POWER GCC 13.1.0
objcppcg1320                          | POWER GCC 13.2.0
objcppcg1330                          | POWER GCC 13.3.0
objcppcg1410                          | POWER GCC 14.1.0
objcppcg1420                          | POWER GCC 14.2.0
gccgoppc1220                          | POWER gccgo 12.2.0
gccgoppc1230                          | POWER gccgo 12.3.0
gccgoppc1240                          | POWER gccgo 12.4.0
gccgoppc1310                          | POWER gccgo 13.1.0
gccgoppc1320                          | POWER gccgo 13.2.0
gccgoppc1330                          | POWER gccgo 13.3.0
gccgoppc1410                          | POWER gccgo 14.1.0
gccgoppc1420                          | POWER gccgo 14.2.0
fppcg1210                             | POWER gfortran 12.1.0
fppcg1220                             | POWER gfortran 12.2.0
fppcg1230                             | POWER gfortran 12.3.0
fppcg1240                             | POWER gfortran 12.4.0
fppcg1310                             | POWER gfortran 13.1.0
fppcg1320                             | POWER gfortran 13.2.0
fppcg1330                             | POWER gfortran 13.3.0
fppcg1410                             | POWER gfortran 14.1.0
fppcg1420                             | POWER gfortran 14.2.0
objcppc64g1220                        | POWER64 GCC 12.2.0
objcppc64g1230                        | POWER64 GCC 12.3.0
objcppc64g1240                        | POWER64 GCC 12.4.0
objcppc64g1310                        | POWER64 GCC 13.1.0
objcppc64g1320                        | POWER64 GCC 13.2.0
objcppc64g1330                        | POWER64 GCC 13.3.0
objcppc64g1410                        | POWER64 GCC 14.1.0
objcppc64g1420                        | POWER64 GCC 14.2.0
objcppc64gtrunk                       | POWER64 GCC trunk
ppc64_gltip                           | POWER64 gc (tip)
ppc64_gl114                           | POWER64 gc 1.14
ppc64_gl115                           | POWER64 gc 1.15
ppc64_gl116                           | POWER64 gc 1.16
ppc64_gl117                           | POWER64 gc 1.17
ppc64_gl118                           | POWER64 gc 1.18
ppc64_gl119                           | POWER64 gc 1.19
ppc64_gl120                           | POWER64 gc 1.20
ppc64_gl121                           | POWER64 gc 1.21
ppc64_gl122                           | POWER64 gc 1.22.1
cppc64g1120                           | POWER64 gcc 11.2.0
gimpleppc64g1120                      | POWER64 gcc 11.2.0
cppc64g1210                           | POWER64 gcc 12.1.0
gimpleppc64g1210                      | POWER64 gcc 12.1.0
cppc64g1220                           | POWER64 gcc 12.2.0
gimpleppc64g1220                      | POWER64 gcc 12.2.0
cppc64g1230                           | POWER64 gcc 12.3.0
gimpleppc64g1230                      | POWER64 gcc 12.3.0
cppc64g1240                           | POWER64 gcc 12.4.0
cppc64g1310                           | POWER64 gcc 13.1.0
gimpleppc64g1310                      | POWER64 gcc 13.1.0
cppc64g1320                           | POWER64 gcc 13.2.0
gimpleppc64g1320                      | POWER64 gcc 13.2.0
cppc64g1330                           | POWER64 gcc 13.3.0
gimpleppc64g1330                      | POWER64 gcc 13.3.0
cppc64g1410                           | POWER64 gcc 14.1.0
gimpleppc64g1410                      | POWER64 gcc 14.1.0
cppc64g1420                           | POWER64 gcc 14.2.0
gimpleppc64g1420                      | POWER64 gcc 14.2.0
cppc64gtrunk                          | POWER64 gcc trunk
gccgoppc641220                        | POWER64 gccgo 12.2.0
gccgoppc641230                        | POWER64 gccgo 12.3.0
gccgoppc641240                        | POWER64 gccgo 12.4.0
gccgoppc641310                        | POWER64 gccgo 13.1.0
gccgoppc641320                        | POWER64 gccgo 13.2.0
gccgoppc641330                        | POWER64 gccgo 13.3.0
gccgoppc641410                        | POWER64 gccgo 14.1.0
gccgoppc641420                        | POWER64 gccgo 14.2.0
gppc64g8                              | POWER64 gccgo AT12.0
gppc64g9                              | POWER64 gccgo AT13.0
gccgoppc64trunk                       | POWER64 gccgo trunk
fppc64g1210                           | POWER64 gfortran 12.1.0
fppc64g1220                           | POWER64 gfortran 12.2.0
fppc64g1230                           | POWER64 gfortran 12.3.0
fppc64g1240                           | POWER64 gfortran 12.4.0
fppc64g1310                           | POWER64 gfortran 13.1.0
fppc64g1320                           | POWER64 gfortran 13.2.0
fppc64g1330                           | POWER64 gfortran 13.3.0
fppc64g1410                           | POWER64 gfortran 14.1.0
fppc64g1420                           | POWER64 gfortran 14.2.0
fppc64gtrunk                          | POWER64 gfortran trunk
objcppc64leg1220                      | POWER64LE GCC 12.2.0
objcppc64leg1230                      | POWER64LE GCC 12.3.0
objcppc64leg1240                      | POWER64LE GCC 12.4.0
objcppc64leg1310                      | POWER64LE GCC 13.1.0
objcppc64leg1320                      | POWER64LE GCC 13.2.0
objcppc64leg1330                      | POWER64LE GCC 13.3.0
objcppc64leg1410                      | POWER64LE GCC 14.1.0
objcppc64leg1420                      | POWER64LE GCC 14.2.0
objcppc64legtrunk                     | POWER64LE GCC trunk
ppc64le_gltip                         | POWER64LE gc (tip)
ppc64le_gl114                         | POWER64LE gc 1.14
ppc64le_gl115                         | POWER64LE gc 1.15
ppc64le_gl116                         | POWER64LE gc 1.16
ppc64le_gl117                         | POWER64LE gc 1.17
ppc64le_gl118                         | POWER64LE gc 1.18
ppc64le_gl119                         | POWER64LE gc 1.19
ppc64le_gl120                         | POWER64LE gc 1.20
ppc64le_gl121                         | POWER64LE gc 1.21
ppc64le_gl122                         | POWER64LE gc 1.22.1
gccgoppc64le1220                      | POWER64LE gccgo 12.2.0
gccgoppc64le1230                      | POWER64LE gccgo 12.3.0
gccgoppc64le1240                      | POWER64LE gccgo 12.4.0
gccgoppc64le1310                      | POWER64LE gccgo 13.1.0
gccgoppc64le1320                      | POWER64LE gccgo 13.2.0
gccgoppc64le1330                      | POWER64LE gccgo 13.3.0
gccgoppc64le1410                      | POWER64LE gccgo 14.1.0
gccgoppc64le1420                      | POWER64LE gccgo 14.2.0
gppc64leg8                            | POWER64LE gccgo AT12.0
gppc64leg9                            | POWER64LE gccgo AT13.0
gccgoppc64letrunk                     | POWER64LE gccgo trunk
fppc64leg1210                         | POWER64le gfortran 12.1.0
fppc64leg1220                         | POWER64le gfortran 12.2.0
fppc64leg1230                         | POWER64le gfortran 12.3.0
fppc64leg1240                         | POWER64le gfortran 12.4.0
fppc64leg1310                         | POWER64le gfortran 13.1.0
fppc64leg1320                         | POWER64le gfortran 13.2.0
fppc64leg1330                         | POWER64le gfortran 13.3.0
fppc64leg1410                         | POWER64le gfortran 14.1.0
fppc64leg1420                         | POWER64le gfortran 14.2.0
fppc64legtrunk                        | POWER64le gfortran trunk
objcppppcg1230                        | POWERPC GCC 12.3.0
objcppppcg1240                        | POWERPC GCC 12.4.0
objcppppcg1310                        | POWERPC GCC 13.1.0
objcppppcg1320                        | POWERPC GCC 13.2.0
objcppppcg1330                        | POWERPC GCC 13.3.0
objcppppcg1410                        | POWERPC GCC 14.1.0
objcppppcg1420                        | POWERPC GCC 14.2.0
objcppppc64g1230                      | POWERPC64 GCC 12.3.0
objcppppc64g1240                      | POWERPC64 GCC 12.4.0
objcppppc64g1310                      | POWERPC64 GCC 13.1.0
objcppppc64g1320                      | POWERPC64 GCC 13.2.0
objcppppc64g1330                      | POWERPC64 GCC 13.3.0
objcppppc64g1410                      | POWERPC64 GCC 14.1.0
objcppppc64g1420                      | POWERPC64 GCC 14.2.0
objcppppc64gtrunk                     | POWERPC64 GCC trunk
objcppppc64leg1230                    | POWERPC64LE GCC 12.3.0
objcppppc64leg1240                    | POWERPC64LE GCC 12.4.0
objcppppc64leg1310                    | POWERPC64LE GCC 13.1.0
objcppppc64leg1320                    | POWERPC64LE GCC 13.2.0
objcppppc64leg1330                    | POWERPC64LE GCC 13.3.0
objcppppc64leg1410                    | POWERPC64LE GCC 14.1.0
objcppppc64leg1420                    | POWERPC64LE GCC 14.2.0
objcppppc64legtrunk                   | POWERPC64LE GCC trunk
ptxasnvcc100                          | PTX Assembler 10.0.130
ptxasnvcc101                          | PTX Assembler 10.1.105
ptxasnvcc101u1                        | PTX Assembler 10.1.168
ptxasnvcc101u2                        | PTX Assembler 10.1.243
ptxasnvcc102                          | PTX Assembler 10.2.89
ptxasnvcc11                           | PTX Assembler 11.0.2
ptxasnvcc11u1                         | PTX Assembler 11.0.3
ptxasnvcc111                          | PTX Assembler 11.1.0
ptxasnvcc111u1                        | PTX Assembler 11.1.1
ptxasnvcc112                          | PTX Assembler 11.2.0
ptxasnvcc112u1                        | PTX Assembler 11.2.1
ptxasnvcc112u2                        | PTX Assembler 11.2.2
ptxasnvcc113                          | PTX Assembler 11.3.0
ptxasnvcc113u1                        | PTX Assembler 11.3.1
ptxasnvcc114                          | PTX Assembler 11.4.0
ptxasnvcc114u1                        | PTX Assembler 11.4.1
ptxasnvcc115                          | PTX Assembler 11.5.0
ptxasnvcc91                           | PTX Assembler 9.1.85
ptxasnvcc92                           | PTX Assembler 9.2.88
pypy310                               | PyPy 3.10
pypy39                                | PyPy 3.9
python310                             | Python 3.10
python311                             | Python 3.11
python312                             | Python 3.12
python313                             | Python 3.13
python35                              | Python 3.5
python36                              | Python 3.6
python37                              | Python 3.7
python38                              | Python 3.8
python39                              | Python 3.9
pythran015                            | Pythran 0.15
rga261_dxc162112                      | RGA 2.6.1 (DXC 1.6.2112)
rga261_dxc172207                      | RGA 2.6.1 (DXC 1.7.2207)
rga262_dxc162112                      | RGA 2.6.2 (DXC 1.6.2112)
rga262_dxc172207                      | RGA 2.6.2 (DXC 1.7.2207)
rga262_dxctrunk                       | RGA 2.6.2 (DXC trunk)
rga290_dxctrunk                       | RGA 2.9.0 (DXC trunk)
rv32-gcctrunk                         | RISC-V (32-bits) gcc (trunk)
rv32-cgcctrunk                        | RISC-V (32-bits) gcc (trunk)
rv32-gimplegcctrunk                   | RISC-V (32-bits) gcc (trunk)
rv32-gcc1020                          | RISC-V (32-bits) gcc 10.2.0
rv32-cgcc1020                         | RISC-V (32-bits) gcc 10.2.0
rv32-gimplegcc1020                    | RISC-V (32-bits) gcc 10.2.0
rv32-gcc1030                          | RISC-V (32-bits) gcc 10.3.0
rv32-cgcc1030                         | RISC-V (32-bits) gcc 10.3.0
rv32-gimplegcc1030                    | RISC-V (32-bits) gcc 10.3.0
rv32-gcc1120                          | RISC-V (32-bits) gcc 11.2.0
rv32-cgcc1120                         | RISC-V (32-bits) gcc 11.2.0
rv32-gimplegcc1120                    | RISC-V (32-bits) gcc 11.2.0
rv32-gcc1130                          | RISC-V (32-bits) gcc 11.3.0
rv32-cgcc1130                         | RISC-V (32-bits) gcc 11.3.0
rv32-gimplegcc1130                    | RISC-V (32-bits) gcc 11.3.0
rv32-gcc1140                          | RISC-V (32-bits) gcc 11.4.0
rv32-cgcc1140                         | RISC-V (32-bits) gcc 11.4.0
rv32-gimplegcc1140                    | RISC-V (32-bits) gcc 11.4.0
rv32-gcc1210                          | RISC-V (32-bits) gcc 12.1.0
rv32-cgcc1210                         | RISC-V (32-bits) gcc 12.1.0
rv32-gimplegcc1210                    | RISC-V (32-bits) gcc 12.1.0
rv32-gcc1220                          | RISC-V (32-bits) gcc 12.2.0
rv32-cgcc1220                         | RISC-V (32-bits) gcc 12.2.0
rv32-gimplegcc1220                    | RISC-V (32-bits) gcc 12.2.0
rv32-gcc1230                          | RISC-V (32-bits) gcc 12.3.0
rv32-cgcc1230                         | RISC-V (32-bits) gcc 12.3.0
rv32-gimplegcc1230                    | RISC-V (32-bits) gcc 12.3.0
rv32-gcc1240                          | RISC-V (32-bits) gcc 12.4.0
rv32-cgcc1240                         | RISC-V (32-bits) gcc 12.4.0
rv32-gcc1310                          | RISC-V (32-bits) gcc 13.1.0
rv32-cgcc1310                         | RISC-V (32-bits) gcc 13.1.0
rv32-gimplegcc1310                    | RISC-V (32-bits) gcc 13.1.0
rv32-gcc1320                          | RISC-V (32-bits) gcc 13.2.0
rv32-cgcc1320                         | RISC-V (32-bits) gcc 13.2.0
rv32-gimplegcc1320                    | RISC-V (32-bits) gcc 13.2.0
rv32-gcc1330                          | RISC-V (32-bits) gcc 13.3.0
rv32-cgcc1330                         | RISC-V (32-bits) gcc 13.3.0
rv32-gimplegcc1330                    | RISC-V (32-bits) gcc 13.3.0
rv32-gcc1410                          | RISC-V (32-bits) gcc 14.1.0
rv32-cgcc1410                         | RISC-V (32-bits) gcc 14.1.0
rv32-gimplegcc1410                    | RISC-V (32-bits) gcc 14.1.0
rv32-gcc1420                          | RISC-V (32-bits) gcc 14.2.0
rv32-cgcc1420                         | RISC-V (32-bits) gcc 14.2.0
rv32-gimplegcc1420                    | RISC-V (32-bits) gcc 14.2.0
rv32-gcc820                           | RISC-V (32-bits) gcc 8.2.0
rv32-cgcc820                          | RISC-V (32-bits) gcc 8.2.0
rv32-gcc850                           | RISC-V (32-bits) gcc 8.5.0
rv32-cgcc850                          | RISC-V (32-bits) gcc 8.5.0
rv32-gcc940                           | RISC-V (32-bits) gcc 9.4.0
rv32-cgcc940                          | RISC-V (32-bits) gcc 9.4.0
rv32-gimplegcc940                     | RISC-V (32-bits) gcc 9.4.0
rv64-gcctrunk                         | RISC-V (64-bits) gcc (trunk)
rv64-cgcctrunk                        | RISC-V (64-bits) gcc (trunk)
rv64-gimplegcctrunk                   | RISC-V (64-bits) gcc (trunk)
rv64-gcc1020                          | RISC-V (64-bits) gcc 10.2.0
rv64-cgcc1020                         | RISC-V (64-bits) gcc 10.2.0
rv64-gimplegcc1020                    | RISC-V (64-bits) gcc 10.2.0
rv64-gcc1030                          | RISC-V (64-bits) gcc 10.3.0
rv64-cgcc1030                         | RISC-V (64-bits) gcc 10.3.0
rv64-gimplegcc1030                    | RISC-V (64-bits) gcc 10.3.0
rv64-gcc1120                          | RISC-V (64-bits) gcc 11.2.0
rv64-cgcc1120                         | RISC-V (64-bits) gcc 11.2.0
rv64-gimplegcc1120                    | RISC-V (64-bits) gcc 11.2.0
rv64-gcc1130                          | RISC-V (64-bits) gcc 11.3.0
rv64-cgcc1130                         | RISC-V (64-bits) gcc 11.3.0
rv64-gimplegcc1130                    | RISC-V (64-bits) gcc 11.3.0
rv64-gcc1140                          | RISC-V (64-bits) gcc 11.4.0
rv64-cgcc1140                         | RISC-V (64-bits) gcc 11.4.0
rv64-gimplegcc1140                    | RISC-V (64-bits) gcc 11.4.0
rv64-gcc1210                          | RISC-V (64-bits) gcc 12.1.0
rv64-cgcc1210                         | RISC-V (64-bits) gcc 12.1.0
rv64-gimplegcc1210                    | RISC-V (64-bits) gcc 12.1.0
rv64-gcc1220                          | RISC-V (64-bits) gcc 12.2.0
rv64-cgcc1220                         | RISC-V (64-bits) gcc 12.2.0
rv64-gimplegcc1220                    | RISC-V (64-bits) gcc 12.2.0
rv64-gcc1230                          | RISC-V (64-bits) gcc 12.3.0
rv64-cgcc1230                         | RISC-V (64-bits) gcc 12.3.0
rv64-gimplegcc1230                    | RISC-V (64-bits) gcc 12.3.0
rv64-gcc1240                          | RISC-V (64-bits) gcc 12.4.0
rv64-cgcc1240                         | RISC-V (64-bits) gcc 12.4.0
rv64-gcc1310                          | RISC-V (64-bits) gcc 13.1.0
rv64-cgcc1310                         | RISC-V (64-bits) gcc 13.1.0
rv64-gimplegcc1310                    | RISC-V (64-bits) gcc 13.1.0
rv64-gcc1320                          | RISC-V (64-bits) gcc 13.2.0
rv64-cgcc1320                         | RISC-V (64-bits) gcc 13.2.0
rv64-gimplegcc1320                    | RISC-V (64-bits) gcc 13.2.0
rv64-gcc1330                          | RISC-V (64-bits) gcc 13.3.0
rv64-cgcc1330                         | RISC-V (64-bits) gcc 13.3.0
rv64-gimplegcc1330                    | RISC-V (64-bits) gcc 13.3.0
rv64-gcc1410                          | RISC-V (64-bits) gcc 14.1.0
rv64-cgcc1410                         | RISC-V (64-bits) gcc 14.1.0
rv64-gimplegcc1410                    | RISC-V (64-bits) gcc 14.1.0
rv64-gcc1420                          | RISC-V (64-bits) gcc 14.2.0
rv64-cgcc1420                         | RISC-V (64-bits) gcc 14.2.0
rv64-gimplegcc1420                    | RISC-V (64-bits) gcc 14.2.0
rv64-gcc820                           | RISC-V (64-bits) gcc 8.2.0
rv64-cgcc820                          | RISC-V (64-bits) gcc 8.2.0
rv64-gcc850                           | RISC-V (64-bits) gcc 8.5.0
rv64-cgcc850                          | RISC-V (64-bits) gcc 8.5.0
rv64-gcc940                           | RISC-V (64-bits) gcc 9.4.0
rv64-cgcc940                          | RISC-V (64-bits) gcc 9.4.0
rv64-gimplegcc940                     | RISC-V (64-bits) gcc 9.4.0
objcrv32gtrunk                        | RISC-V 32 GCC (trunk)
objcppgccrv32trunk                    | RISC-V 32 GCC (trunk)
objcrv32g1220                         | RISC-V 32 GCC 12.2.0
objcrv32g1230                         | RISC-V 32 GCC 12.3.0
objcppgccrv321230                     | RISC-V 32 GCC 12.3.0
objcrv32g1240                         | RISC-V 32 GCC 12.4.0
objcppgccrv321240                     | RISC-V 32 GCC 12.4.0
objcrv32g1310                         | RISC-V 32 GCC 13.1.0
objcppgccrv321310                     | RISC-V 32 GCC 13.1.0
objcrv32g1320                         | RISC-V 32 GCC 13.2.0
objcppgccrv321320                     | RISC-V 32 GCC 13.2.0
objcrv32g1330                         | RISC-V 32 GCC 13.3.0
objcppgccrv321330                     | RISC-V 32 GCC 13.3.0
objcrv32g1410                         | RISC-V 32 GCC 14.1.0
objcppgccrv321410                     | RISC-V 32 GCC 14.1.0
objcrv32g1420                         | RISC-V 32 GCC 14.2.0
objcppgccrv321420                     | RISC-V 32 GCC 14.2.0
frv32gtrunk                           | RISC-V 32-bits gfortran (trunk)
frv32g1210                            | RISC-V 32-bits gfortran 12.1.0
objcrv64gtrunk                        | RISC-V 64 GCC (trunk)
objcppgccrv64trunk                    | RISC-V 64 GCC (trunk)
objcrv64g1220                         | RISC-V 64 GCC 12.2.0
objcppgccrv641230                     | RISC-V 64 GCC 12.3.0
objcppgccrv641240                     | RISC-V 64 GCC 12.4.0
objcppgccrv641310                     | RISC-V 64 GCC 13.1.0
objcppgccrv641320                     | RISC-V 64 GCC 13.2.0
objcppgccrv641330                     | RISC-V 64 GCC 13.3.0
objcppgccrv641410                     | RISC-V 64 GCC 14.1.0
objcppgccrv641420                     | RISC-V 64 GCC 14.2.0
riscv64_gltip                         | RISC-V 64 gc (tip)
riscv64_gl114                         | RISC-V 64 gc 1.14
riscv64_gl115                         | RISC-V 64 gc 1.15
riscv64_gl116                         | RISC-V 64 gc 1.16
riscv64_gl117                         | RISC-V 64 gc 1.17
riscv64_gl118                         | RISC-V 64 gc 1.18
riscv64_gl119                         | RISC-V 64 gc 1.19
riscv64_gl120                         | RISC-V 64 gc 1.20
riscv64_gl121                         | RISC-V 64 gc 1.21
riscv64_gl122                         | RISC-V 64 gc 1.22.1
gccgoriscv641220                      | RISC-V 64 gccgo 12.2.0
gccgoriscv641230                      | RISC-V 64 gccgo 12.3.0
gccgoriscv641240                      | RISC-V 64 gccgo 12.4.0
gccgoriscv641310                      | RISC-V 64 gccgo 13.1.0
gccgoriscv641320                      | RISC-V 64 gccgo 13.2.0
gccgoriscv641330                      | RISC-V 64 gccgo 13.3.0
gccgoriscv641410                      | RISC-V 64 gccgo 14.1.0
gccgoriscv641420                      | RISC-V 64 gccgo 14.2.0
frv64gtrunk                           | RISC-V 64-bits gfortran (trunk)
frv64g1210                            | RISC-V 64-bits gfortran 12.1.0
gnuasriscv64g820                      | RISC-V binutils 2.31.1
gnuasriscv32g820                      | RISC-V binutils 2.31.1
gnuasriscv64g1020                     | RISC-V binutils 2.35.1
gnuasriscv32g1020                     | RISC-V binutils 2.35.1
gnuasriscv64g1140                     | RISC-V binutils 2.37.0
gnuasriscv32g1140                     | RISC-V binutils 2.37.0
gnuasriscv64g1320                     | RISC-V binutils 2.38.0
gnuasriscv32g1320                     | RISC-V binutils 2.38.0
rv32-clang                            | RISC-V rv32gc clang (trunk)
rv32-cclang                           | RISC-V rv32gc clang (trunk)
rv32-clang1000                        | RISC-V rv32gc clang 10.0.0
rv32-cclang1000                       | RISC-V rv32gc clang 10.0.0
rv32-clang1001                        | RISC-V rv32gc clang 10.0.1
rv32-cclang1001                       | RISC-V rv32gc clang 10.0.1
rv32-clang1100                        | RISC-V rv32gc clang 11.0.0
rv32-cclang1100                       | RISC-V rv32gc clang 11.0.0
rv32-clang1101                        | RISC-V rv32gc clang 11.0.1
rv32-cclang1101                       | RISC-V rv32gc clang 11.0.1
rv32-clang1200                        | RISC-V rv32gc clang 12.0.0
rv32-cclang1200                       | RISC-V rv32gc clang 12.0.0
rv32-clang1201                        | RISC-V rv32gc clang 12.0.1
rv32-cclang1201                       | RISC-V rv32gc clang 12.0.1
rv32-clang1300                        | RISC-V rv32gc clang 13.0.0
rv32-cclang1300                       | RISC-V rv32gc clang 13.0.0
rv32-clang1301                        | RISC-V rv32gc clang 13.0.1
rv32-cclang1301                       | RISC-V rv32gc clang 13.0.1
rv32-clang1400                        | RISC-V rv32gc clang 14.0.0
rv32-cclang1400                       | RISC-V rv32gc clang 14.0.0
rv32-clang1500                        | RISC-V rv32gc clang 15.0.0
rv32-cclang1500                       | RISC-V rv32gc clang 15.0.0
rv32-clang1600                        | RISC-V rv32gc clang 16.0.0
rv32-cclang1600                       | RISC-V rv32gc clang 16.0.0
rv32-clang1701                        | RISC-V rv32gc clang 17.0.1
rv32-cclang1701                       | RISC-V rv32gc clang 17.0.1
rv32-clang1810                        | RISC-V rv32gc clang 18.1.0
rv32-cclang1810                       | RISC-V rv32gc clang 18.1.0
rv32-clang1910                        | RISC-V rv32gc clang 19.1.0
rv32-clang900                         | RISC-V rv32gc clang 9.0.0
rv32-cclang900                        | RISC-V rv32gc clang 9.0.0
rv32-clang901                         | RISC-V rv32gc clang 9.0.1
rv32-cclang901                        | RISC-V rv32gc clang 9.0.1
rv64-clang                            | RISC-V rv64gc clang (trunk)
rv64-cclang                           | RISC-V rv64gc clang (trunk)
rv64-clang1000                        | RISC-V rv64gc clang 10.0.0
rv64-cclang1000                       | RISC-V rv64gc clang 10.0.0
rv64-clang1001                        | RISC-V rv64gc clang 10.0.1
rv64-cclang1001                       | RISC-V rv64gc clang 10.0.1
rv64-clang1100                        | RISC-V rv64gc clang 11.0.0
rv64-cclang1100                       | RISC-V rv64gc clang 11.0.0
rv64-clang1101                        | RISC-V rv64gc clang 11.0.1
rv64-cclang1101                       | RISC-V rv64gc clang 11.0.1
rv64-clang1200                        | RISC-V rv64gc clang 12.0.0
rv64-cclang1200                       | RISC-V rv64gc clang 12.0.0
rv64-clang1201                        | RISC-V rv64gc clang 12.0.1
rv64-cclang1201                       | RISC-V rv64gc clang 12.0.1
rv64-clang1300                        | RISC-V rv64gc clang 13.0.0
rv64-cclang1300                       | RISC-V rv64gc clang 13.0.0
rv64-clang1301                        | RISC-V rv64gc clang 13.0.1
rv64-cclang1301                       | RISC-V rv64gc clang 13.0.1
rv64-clang1400                        | RISC-V rv64gc clang 14.0.0
rv64-cclang1400                       | RISC-V rv64gc clang 14.0.0
rv64-clang1500                        | RISC-V rv64gc clang 15.0.0
rv64-cclang1500                       | RISC-V rv64gc clang 15.0.0
rv64-clang1600                        | RISC-V rv64gc clang 16.0.0
rv64-cclang1600                       | RISC-V rv64gc clang 16.0.0
rv64-clang1701                        | RISC-V rv64gc clang 17.0.1
rv64-cclang1701                       | RISC-V rv64gc clang 17.0.1
rv64-clang1810                        | RISC-V rv64gc clang 18.1.0
rv64-cclang1810                       | RISC-V rv64gc clang 18.1.0
rv64-clang1910                        | RISC-V rv64gc clang 19.1.0
rv64-clang900                         | RISC-V rv64gc clang 9.0.0
rv64-cclang900                        | RISC-V rv64gc clang 9.0.0
rv64-clang901                         | RISC-V rv64gc clang 9.0.1
rv64-cclang901                        | RISC-V rv64gc clang 9.0.1
friscvg1140                           | RISCV (32bit) gfortran 11.4.0
friscvg1220                           | RISCV (32bit) gfortran 12.2.0
friscvg1230                           | RISCV (32bit) gfortran 12.3.0
friscvg1240                           | RISCV (32bit) gfortran 12.4.0
friscvg1310                           | RISCV (32bit) gfortran 13.1.0
friscvg1320                           | RISCV (32bit) gfortran 13.2.0
friscvg1330                           | RISCV (32bit) gfortran 13.3.0
friscvg1410                           | RISCV (32bit) gfortran 14.1.0
friscvg1420                           | RISCV (32bit) gfortran 14.2.0
friscv64g1140                         | RISCV64 gfortran 11.4.0
friscv64g1220                         | RISCV64 gfortran 12.2.0
friscv64g1230                         | RISCV64 gfortran 12.3.0
friscv64g1240                         | RISCV64 gfortran 12.4.0
friscv64g1310                         | RISCV64 gfortran 13.1.0
friscv64g1320                         | RISCV64 gfortran 13.2.0
friscv64g1330                         | RISCV64 gfortran 13.3.0
friscv64g1410                         | RISCV64 gfortran 14.1.0
friscv64g1420                         | RISCV64 gfortran 14.2.0
racketnightly                         | Racket (nightly snapshot)
racket86                              | Racket 8.6
raspbian10                            | Raspbian Buster
craspbian10                           | Raspbian Buster
raspbian9                             | Raspbian Stretch
craspbian9                            | Raspbian Stretch
ruby259                               | Ruby 2.5.9
ruby268                               | Ruby 2.6.8
ruby278                               | Ruby 2.7.8
ruby307                               | Ruby 3.0.7
ruby316                               | Ruby 3.1.6
ruby324                               | Ruby 3.2.4
ruby334                               | Ruby 3.3.4
objcpps390xg1230                      | S390X GCC 12.3.0
objcpps390xg1240                      | S390X GCC 12.4.0
objcpps390xg1310                      | S390X GCC 13.1.0
objcpps390xg1320                      | S390X GCC 13.2.0
objcpps390xg1330                      | S390X GCC 13.3.0
objcpps390xg1410                      | S390X GCC 14.1.0
objcpps390xg1420                      | S390X GCC 14.2.0
gnats390x1120                         | S390X GNAT 11.2.0
gnats390x1210                         | S390X GNAT 12.1.0
gnats390x1220                         | S390X GNAT 12.2.0
gnats390x1230                         | S390X GNAT 12.3.0
gnats390x1240                         | S390X GNAT 12.4.0
gnats390x1310                         | S390X GNAT 13.1.0
gnats390x1320                         | S390X GNAT 13.2.0
gnats390x1330                         | S390X GNAT 13.3.0
gnats390x1410                         | S390X GNAT 14.1.0
gnats390x1420                         | S390X GNAT 14.2.0
s390x_gltip                           | S390X gc (tip)
s390x_gl114                           | S390X gc 1.14
s390x_gl115                           | S390X gc 1.15
s390x_gl116                           | S390X gc 1.16
s390x_gl117                           | S390X gc 1.17
s390x_gl118                           | S390X gc 1.18
s390x_gl119                           | S390X gc 1.19
s390x_gl120                           | S390X gc 1.20
s390x_gl121                           | S390X gc 1.21
s390x_gl122                           | S390X gc 1.22.1
gccgos390x1220                        | S390X gccgo 12.2.0
gccgos390x1230                        | S390X gccgo 12.3.0
gccgos390x1240                        | S390X gccgo 12.4.0
gccgos390x1310                        | S390X gccgo 13.1.0
gccgos390x1320                        | S390X gccgo 13.2.0
gccgos390x1330                        | S390X gccgo 13.3.0
gccgos390x1410                        | S390X gccgo 14.1.0
gccgos390x1420                        | S390X gccgo 14.2.0
sdcc400                               | SDCC 4.0.0
sdcc410                               | SDCC 4.1.0
sdcc420                               | SDCC 4.2.0
sdcc430                               | SDCC 4.3.0
sdcc440                               | SDCC 4.4.0
sparcleong1220-1                      | SPARC LEON gcc 12.2.0
csparcleong1220-1                     | SPARC LEON gcc 12.2.0
objcsparcleong1220-1                  | SPARC LEON gcc 12.2.0
gimplesparcleong1220-1                | SPARC LEON gcc 12.2.0
sparcleong1230                        | SPARC LEON gcc 12.3.0
csparcleong1230                       | SPARC LEON gcc 12.3.0
objcsparcleong1230                    | SPARC LEON gcc 12.3.0
gimplesparcleong1230                  | SPARC LEON gcc 12.3.0
sparcleong1240                        | SPARC LEON gcc 12.4.0
csparcleong1240                       | SPARC LEON gcc 12.4.0
objcsparcleong1240                    | SPARC LEON gcc 12.4.0
sparcleong1310                        | SPARC LEON gcc 13.1.0
csparcleong1310                       | SPARC LEON gcc 13.1.0
objcsparcleong1310                    | SPARC LEON gcc 13.1.0
gimplesparcleong1310                  | SPARC LEON gcc 13.1.0
sparcleong1320                        | SPARC LEON gcc 13.2.0
csparcleong1320                       | SPARC LEON gcc 13.2.0
objcsparcleong1320                    | SPARC LEON gcc 13.2.0
gimplesparcleong1320                  | SPARC LEON gcc 13.2.0
sparcleong1330                        | SPARC LEON gcc 13.3.0
csparcleong1330                       | SPARC LEON gcc 13.3.0
objcsparcleong1330                    | SPARC LEON gcc 13.3.0
gimplesparcleong1330                  | SPARC LEON gcc 13.3.0
sparcleong1220                        | SPARC LEON gcc 13.x (incorrectly named 12.2.0 in the past)
csparcleong1220                       | SPARC LEON gcc 13.x (incorrectly named 12.2.0 in the past)
objcsparcleong1220                    | SPARC LEON gcc 13.x (incorrectly named 12.2.0 in the past)
gimplesparcleong1220                  | SPARC LEON gcc 13.x (incorrectly named 12.2.0 in the past)
sparcleong1410                        | SPARC LEON gcc 14.1.0
csparcleong1410                       | SPARC LEON gcc 14.1.0
objcsparcleong1410                    | SPARC LEON gcc 14.1.0
gimplesparcleong1410                  | SPARC LEON gcc 14.1.0
sparcleong1420                        | SPARC LEON gcc 14.2.0
csparcleong1420                       | SPARC LEON gcc 14.2.0
objcsparcleong1420                    | SPARC LEON gcc 14.2.0
gimplesparcleong1420                  | SPARC LEON gcc 14.2.0
fsparcleong1220-1                     | SPARC LEON gfortran 12.2.0
fsparcleong1230                       | SPARC LEON gfortran 12.3.0
fsparcleong1240                       | SPARC LEON gfortran 12.4.0
fsparcleong1310                       | SPARC LEON gfortran 13.1.0
fsparcleong1320                       | SPARC LEON gfortran 13.2.0
fsparcleong1330                       | SPARC LEON gfortran 13.3.0
fsparcleong1220                       | SPARC LEON gfortran 13.x (incorrectly named 12.2.0 in the past)
fsparcleong1410                       | SPARC LEON gfortran 14.1.0
fsparcleong1420                       | SPARC LEON gfortran 14.2.0
sparcg1220                            | SPARC gcc 12.2.0
csparcg1220                           | SPARC gcc 12.2.0
objcsparcg1220                        | SPARC gcc 12.2.0
gimplesparcg1220                      | SPARC gcc 12.2.0
sparcg1230                            | SPARC gcc 12.3.0
csparcg1230                           | SPARC gcc 12.3.0
objcsparcg1230                        | SPARC gcc 12.3.0
gimplesparcg1230                      | SPARC gcc 12.3.0
sparcg1240                            | SPARC gcc 12.4.0
csparcg1240                           | SPARC gcc 12.4.0
objcsparcg1240                        | SPARC gcc 12.4.0
sparcg1310                            | SPARC gcc 13.1.0
csparcg1310                           | SPARC gcc 13.1.0
objcsparcg1310                        | SPARC gcc 13.1.0
gimplesparcg1310                      | SPARC gcc 13.1.0
sparcg1320                            | SPARC gcc 13.2.0
csparcg1320                           | SPARC gcc 13.2.0
objcsparcg1320                        | SPARC gcc 13.2.0
gimplesparcg1320                      | SPARC gcc 13.2.0
sparcg1330                            | SPARC gcc 13.3.0
csparcg1330                           | SPARC gcc 13.3.0
objcsparcg1330                        | SPARC gcc 13.3.0
gimplesparcg1330                      | SPARC gcc 13.3.0
sparcg1410                            | SPARC gcc 14.1.0
csparcg1410                           | SPARC gcc 14.1.0
objcsparcg1410                        | SPARC gcc 14.1.0
gimplesparcg1410                      | SPARC gcc 14.1.0
sparcg1420                            | SPARC gcc 14.2.0
csparcg1420                           | SPARC gcc 14.2.0
objcsparcg1420                        | SPARC gcc 14.2.0
gimplesparcg1420                      | SPARC gcc 14.2.0
gccgosparc1220                        | SPARC gccgo 12.2.0
gccgosparc1230                        | SPARC gccgo 12.3.0
gccgosparc1240                        | SPARC gccgo 12.4.0
gccgosparc1310                        | SPARC gccgo 13.1.0
gccgosparc1320                        | SPARC gccgo 13.2.0
gccgosparc1330                        | SPARC gccgo 13.3.0
gccgosparc1410                        | SPARC gccgo 14.1.0
gccgosparc1420                        | SPARC gccgo 14.2.0
fsparcg1220                           | SPARC gfortran 12.2.0
fsparcg1230                           | SPARC gfortran 12.3.0
fsparcg1240                           | SPARC gfortran 12.4.0
fsparcg1310                           | SPARC gfortran 13.1.0
fsparcg1320                           | SPARC gfortran 13.2.0
fsparcg1330                           | SPARC gfortran 13.3.0
fsparcg1410                           | SPARC gfortran 14.1.0
fsparcg1420                           | SPARC gfortran 14.2.0
sparc64g1220                          | SPARC64 gcc 12.2.0
csparc64g1220                         | SPARC64 gcc 12.2.0
objcsparc64g1220                      | SPARC64 gcc 12.2.0
gimplesparc64g1220                    | SPARC64 gcc 12.2.0
sparc64g1230                          | SPARC64 gcc 12.3.0
csparc64g1230                         | SPARC64 gcc 12.3.0
objcsparc64g1230                      | SPARC64 gcc 12.3.0
gimplesparc64g1230                    | SPARC64 gcc 12.3.0
sparc64g1240                          | SPARC64 gcc 12.4.0
csparc64g1240                         | SPARC64 gcc 12.4.0
objcsparc64g1240                      | SPARC64 gcc 12.4.0
sparc64g1310                          | SPARC64 gcc 13.1.0
csparc64g1310                         | SPARC64 gcc 13.1.0
objcsparc64g1310                      | SPARC64 gcc 13.1.0
gimplesparc64g1310                    | SPARC64 gcc 13.1.0
sparc64g1320                          | SPARC64 gcc 13.2.0
csparc64g1320                         | SPARC64 gcc 13.2.0
objcsparc64g1320                      | SPARC64 gcc 13.2.0
gimplesparc64g1320                    | SPARC64 gcc 13.2.0
sparc64g1330                          | SPARC64 gcc 13.3.0
csparc64g1330                         | SPARC64 gcc 13.3.0
objcsparc64g1330                      | SPARC64 gcc 13.3.0
gimplesparc64g1330                    | SPARC64 gcc 13.3.0
sparc64g1410                          | SPARC64 gcc 14.1.0
csparc64g1410                         | SPARC64 gcc 14.1.0
objcsparc64g1410                      | SPARC64 gcc 14.1.0
gimplesparc64g1410                    | SPARC64 gcc 14.1.0
sparc64g1420                          | SPARC64 gcc 14.2.0
csparc64g1420                         | SPARC64 gcc 14.2.0
objcsparc64g1420                      | SPARC64 gcc 14.2.0
gimplesparc64g1420                    | SPARC64 gcc 14.2.0
gccgosparc641220                      | SPARC64 gccgo 12.2.0
gccgosparc641230                      | SPARC64 gccgo 12.3.0
gccgosparc641240                      | SPARC64 gccgo 12.4.0
gccgosparc641310                      | SPARC64 gccgo 13.1.0
gccgosparc641320                      | SPARC64 gccgo 13.2.0
gccgosparc641330                      | SPARC64 gccgo 13.3.0
gccgosparc641410                      | SPARC64 gccgo 14.1.0
gccgosparc641420                      | SPARC64 gccgo 14.2.0
fsparc64g1220                         | SPARC64 gfortran 12.2.0
fsparc64g1230                         | SPARC64 gfortran 12.3.0
fsparc64g1240                         | SPARC64 gfortran 12.4.0
fsparc64g1310                         | SPARC64 gfortran 13.1.0
fsparc64g1320                         | SPARC64 gfortran 13.2.0
fsparc64g1330                         | SPARC64 gfortran 13.3.0
fsparc64g1410                         | SPARC64 gfortran 14.1.0
fsparc64g1420                         | SPARC64 gfortran 14.2.0
tinycctrunk                           | TCC (trunk)
tinycc0927                            | TCC 0.9.27
c6xg1220                              | TI C6x gcc 12.2.0
cc6xg1220                             | TI C6x gcc 12.2.0
gimplec6xg1220                        | TI C6x gcc 12.2.0
c6xg1230                              | TI C6x gcc 12.3.0
cc6xg1230                             | TI C6x gcc 12.3.0
gimplec6xg1230                        | TI C6x gcc 12.3.0
c6xg1240                              | TI C6x gcc 12.4.0
cc6xg1240                             | TI C6x gcc 12.4.0
c6xg1310                              | TI C6x gcc 13.1.0
cc6xg1310                             | TI C6x gcc 13.1.0
gimplec6xg1310                        | TI C6x gcc 13.1.0
c6xg1320                              | TI C6x gcc 13.2.0
cc6xg1320                             | TI C6x gcc 13.2.0
gimplec6xg1320                        | TI C6x gcc 13.2.0
c6xg1330                              | TI C6x gcc 13.3.0
cc6xg1330                             | TI C6x gcc 13.3.0
gimplec6xg1330                        | TI C6x gcc 13.3.0
c6xg1410                              | TI C6x gcc 14.1.0
cc6xg1410                             | TI C6x gcc 14.1.0
gimplec6xg1410                        | TI C6x gcc 14.1.0
c6xg1420                              | TI C6x gcc 14.2.0
cc6xg1420                             | TI C6x gcc 14.2.0
gimplec6xg1420                        | TI C6x gcc 14.2.0
cl4302161                             | TI CL430 21.6.1
ccl4302161                            | TI CL430 21.6.1
tsc_0_0_20_gc                         | TypeScript Native Compiler 0.0.pre20 JIT (GC)
tsc_0_0_20_nogc                       | TypeScript Native Compiler 0.0.pre20 JIT (No GC)
tsc_0_0_26_gc                         | TypeScript Native Compiler 0.0.pre26 JIT (GC)
tsc_0_0_26_nogc                       | TypeScript Native Compiler 0.0.pre26 JIT (No GC)
tsc_0_0_27_gc                         | TypeScript Native Compiler 0.0.pre27 JIT (GC)
tsc_0_0_27_nogc                       | TypeScript Native Compiler 0.0.pre27 JIT (No GC)
tsc_0_0_33_gc                         | TypeScript Native Compiler 0.0.pre33 JIT (GC)
tsc_0_0_33_nogc                       | TypeScript Native Compiler 0.0.pre33 JIT (No GC)
tsc_0_0_35_gc                         | TypeScript Native Compiler 0.0.pre35 JIT (GC)
tsc_0_0_35_nogc                       | TypeScript Native Compiler 0.0.pre35 JIT (No GC)
v04                                   | V 0.4
vaxg1040                              | VAX gcc NetBSDELF 10.4.0
cvaxg1040                             | VAX gcc NetBSDELF 10.4.0
objcvaxg1040                          | VAX gcc NetBSDELF 10.4.0
gimplevaxg1040                        | VAX gcc NetBSDELF 10.4.0
vaxg1050                              | VAX gcc NetBSDELF 10.5.0 (Nov 15 03:50:22 2023)
cvaxg1050                             | VAX gcc NetBSDELF 10.5.0 (Nov 15 03:50:22 2023)
objcvaxg1050                          | VAX gcc NetBSDELF 10.5.0 (Nov 15 03:50:22 2023)
gimplevaxg1050                        | VAX gcc NetBSDELF 10.5.0 (Nov 15 03:50:22 2023)
valac05606                            | Vala 0.56.6
wasm_gltip                            | WASM gc (tip)
wasm_gl114                            | WASM gc 1.14
wasm_gl115                            | WASM gc 1.15
wasm_gl116                            | WASM gc 1.16
wasm_gl117                            | WASM gc 1.17
wasm_gl118                            | WASM gc 1.18
wasm_gl119                            | WASM gc 1.19
wasm_gl120                            | WASM gc 1.20
wasm_gl121                            | WASM gc 1.21
wasm_gl122                            | WASM gc 1.22.1
wasmtime2001                          | Wasmtime 20.0.1
wasmtime2101                          | Wasmtime 21.0.1
wasmtime2200                          | Wasmtime 22.0.0
wasm32clang                           | WebAssembly clang (trunk)
wasm32cclang                          | WebAssembly clang (trunk)
wyrmtrunk                             | Wyrm GIMPLE to LLVM Transpiler (trunk)
esp32g2022r1                          | Xtensa ESP32 gcc 11.2.0 (2022r1)
cesp32g2022r1                         | Xtensa ESP32 gcc 11.2.0 (2022r1)
gimpleesp32g2022r1                    | Xtensa ESP32 gcc 11.2.0 (2022r1)
esp32g20230208                        | Xtensa ESP32 gcc 12.2.0 (20230208)
cesp32g20230208                       | Xtensa ESP32 gcc 12.2.0 (20230208)
gimpleesp32g20230208                  | Xtensa ESP32 gcc 12.2.0 (20230208)
esp32g2019r2                          | Xtensa ESP32 gcc 8.2.0 (2019r2)
cesp32g2019r2                         | Xtensa ESP32 gcc 8.2.0 (2019r2)
esp32g2020r1                          | Xtensa ESP32 gcc 8.2.0 (2020r1)
cesp32g2020r1                         | Xtensa ESP32 gcc 8.2.0 (2020r1)
esp32g2020r2                          | Xtensa ESP32 gcc 8.2.0 (2020r2)
cesp32g2020r2                         | Xtensa ESP32 gcc 8.2.0 (2020r2)
esp32g2020r3                          | Xtensa ESP32 gcc 8.4.0 (2020r3)
cesp32g2020r3                         | Xtensa ESP32 gcc 8.4.0 (2020r3)
esp32g2021r1                          | Xtensa ESP32 gcc 8.4.0 (2021r1)
cesp32g2021r1                         | Xtensa ESP32 gcc 8.4.0 (2021r1)
esp32g2021r2                          | Xtensa ESP32 gcc 8.4.0 (2021r2)
cesp32g2021r2                         | Xtensa ESP32 gcc 8.4.0 (2021r2)
esp32s2g2022r1                        | Xtensa ESP32-S2 gcc 11.2.0 (2022r1)
cesp32s2g2022r1                       | Xtensa ESP32-S2 gcc 11.2.0 (2022r1)
gimpleesp32s2g2022r1                  | Xtensa ESP32-S2 gcc 11.2.0 (2022r1)
esp32s2g20230208                      | Xtensa ESP32-S2 gcc 12.2.0 (20230208)
cesp32s2g20230208                     | Xtensa ESP32-S2 gcc 12.2.0 (20230208)
gimpleesp32s2g20230208                | Xtensa ESP32-S2 gcc 12.2.0 (20230208)
esp32s2g2019r2                        | Xtensa ESP32-S2 gcc 8.2.0 (2019r2)
cesp32s2g2019r2                       | Xtensa ESP32-S2 gcc 8.2.0 (2019r2)
esp32s2g2020r1                        | Xtensa ESP32-S2 gcc 8.2.0 (2020r1)
cesp32s2g2020r1                       | Xtensa ESP32-S2 gcc 8.2.0 (2020r1)
esp32s2g2020r2                        | Xtensa ESP32-S2 gcc 8.2.0 (2020r2)
cesp32s2g2020r2                       | Xtensa ESP32-S2 gcc 8.2.0 (2020r2)
esp32s2g2020r3                        | Xtensa ESP32-S2 gcc 8.4.0 (2020r3)
cesp32s2g2020r3                       | Xtensa ESP32-S2 gcc 8.4.0 (2020r3)
esp32s2g2021r1                        | Xtensa ESP32-S2 gcc 8.4.0 (2021r1)
cesp32s2g2021r1                       | Xtensa ESP32-S2 gcc 8.4.0 (2021r1)
esp32s2g2021r2                        | Xtensa ESP32-S2 gcc 8.4.0 (2021r2)
cesp32s2g2021r2                       | Xtensa ESP32-S2 gcc 8.4.0 (2021r2)
esp32s3g2022r1                        | Xtensa ESP32-S3 gcc 11.2.0 (2022r1)
cesp32s3g2022r1                       | Xtensa ESP32-S3 gcc 11.2.0 (2022r1)
gimpleesp32s3g2022r1                  | Xtensa ESP32-S3 gcc 11.2.0 (2022r1)
esp32s3g20230208                      | Xtensa ESP32-S3 gcc 12.2.0 (20230208)
cesp32s3g20230208                     | Xtensa ESP32-S3 gcc 12.2.0 (20230208)
gimpleesp32s3g20230208                | Xtensa ESP32-S3 gcc 12.2.0 (20230208)
esp32s3g2020r3                        | Xtensa ESP32-S3 gcc 8.4.0 (2020r3)
cesp32s3g2020r3                       | Xtensa ESP32-S3 gcc 8.4.0 (2020r3)
esp32s3g2021r1                        | Xtensa ESP32-S3 gcc 8.4.0 (2021r1)
cesp32s3g2021r1                       | Xtensa ESP32-S3 gcc 8.4.0 (2021r1)
esp32s3g2021r2                        | Xtensa ESP32-S3 gcc 8.4.0 (2021r2)
cesp32s3g2021r2                       | Xtensa ESP32-S3 gcc 8.4.0 (2021r2)
gnatarm103                            | arm gnat 10.3.0-2 (Alire)
gnatarm112                            | arm gnat 11.2.0-3 (Alire)
gnatarm1310                           | arm gnat 13.1.0
gnatarm1320                           | arm gnat 13.2.0
gnatarm1330                           | arm gnat 13.3.0
gnatarm1410                           | arm gnat 14.1.0
gnatarm1420                           | arm gnat 14.2.0
gnatarm641210                         | arm64 gnat 12.1.0
gnatarm641220                         | arm64 gnat 12.2.0
gnatarm641230                         | arm64 gnat 12.3.0
gnatarm641240                         | arm64 gnat 12.4.0
gnatarm641310                         | arm64 gnat 13.1.0
gnatarm641320                         | arm64 gnat 13.2.0
gnatarm641330                         | arm64 gnat 13.3.0
gnatarm641410                         | arm64 gnat 14.1.0
gnatarm641420                         | arm64 gnat 14.2.0
vcpp_v19_20_VS16_0_arm64              | arm64 msvc v19.20 VS16.0
vc_v19_20_VS16_0_arm64                | arm64 msvc v19.20 VS16.0
vcpp_v19_21_VS16_1_arm64              | arm64 msvc v19.21 VS16.1
vc_v19_21_VS16_1_arm64                | arm64 msvc v19.21 VS16.1
vcpp_v19_22_VS16_2_arm64              | arm64 msvc v19.22 VS16.2
vc_v19_22_VS16_2_arm64                | arm64 msvc v19.22 VS16.2
vcpp_v19_23_VS16_3_arm64              | arm64 msvc v19.23 VS16.3
vc_v19_23_VS16_3_arm64                | arm64 msvc v19.23 VS16.3
vcpp_v19_24_VS16_4_arm64              | arm64 msvc v19.24 VS16.4
vc_v19_24_VS16_4_arm64                | arm64 msvc v19.24 VS16.4
vcpp_v19_25_VS16_5_arm64              | arm64 msvc v19.25 VS16.5
vc_v19_25_VS16_5_arm64                | arm64 msvc v19.25 VS16.5
vcpp_v19_27_VS16_7_arm64              | arm64 msvc v19.27 VS16.7
vc_v19_27_VS16_7_arm64                | arm64 msvc v19.27 VS16.7
vcpp_v19_28_VS16_8_arm64              | arm64 msvc v19.28 VS16.8
vc_v19_28_VS16_8_arm64                | arm64 msvc v19.28 VS16.8
vcpp_v19_28_VS16_9_arm64              | arm64 msvc v19.28 VS16.9
vc_v19_28_VS16_9_arm64                | arm64 msvc v19.28 VS16.9
vcpp_v19_29_VS16_10_arm64             | arm64 msvc v19.29 VS16.10
vc_v19_29_VS16_10_arm64               | arm64 msvc v19.29 VS16.10
vcpp_v19_29_VS16_11_arm64             | arm64 msvc v19.29 VS16.11
vc_v19_29_VS16_11_arm64               | arm64 msvc v19.29 VS16.11
vcpp_v19_30_VS17_0_arm64              | arm64 msvc v19.30 VS17.0
vc_v19_30_VS17_0_arm64                | arm64 msvc v19.30 VS17.0
vcpp_v19_31_VS17_1_arm64              | arm64 msvc v19.31 VS17.1
vc_v19_31_VS17_1_arm64                | arm64 msvc v19.31 VS17.1
vcpp_v19_32_VS17_2_arm64              | arm64 msvc v19.32 VS17.2
vc_v19_32_VS17_2_arm64                | arm64 msvc v19.32 VS17.2
vcpp_v19_33_VS17_3_arm64              | arm64 msvc v19.33 VS17.3
vc_v19_33_VS17_3_arm64                | arm64 msvc v19.33 VS17.3
vcpp_v19_34_VS17_4_arm64              | arm64 msvc v19.34 VS17.4
vc_v19_34_VS17_4_arm64                | arm64 msvc v19.34 VS17.4
vcpp_v19_35_VS17_5_arm64              | arm64 msvc v19.35 VS17.5
vc_v19_35_VS17_5_arm64                | arm64 msvc v19.35 VS17.5
vcpp_v19_36_VS17_6_arm64              | arm64 msvc v19.36 VS17.6
vc_v19_36_VS17_6_arm64                | arm64 msvc v19.36 VS17.6
vcpp_v19_37_VS17_7_arm64              | arm64 msvc v19.37 VS17.7
vc_v19_37_VS17_7_arm64                | arm64 msvc v19.37 VS17.7
vcpp_v19_38_VS17_8_arm64              | arm64 msvc v19.38 VS17.8
vc_v19_38_VS17_8_arm64                | arm64 msvc v19.38 VS17.8
vcpp_v19_39_VS17_9_arm64              | arm64 msvc v19.39 VS17.9
vc_v19_39_VS17_9_arm64                | arm64 msvc v19.39 VS17.9
vcpp_v19_40_VS17_10_arm64             | arm64 msvc v19.40 VS17.10
vc_v19_40_VS17_10_arm64               | arm64 msvc v19.40 VS17.10
vcpp_v19_latest_arm64                 | arm64 msvc v19.latest
vc_v19_latest_arm64                   | arm64 msvc v19.latest
armv7-clang-trunk                     | armv7-a clang (trunk)
armv7-cclang-trunk                    | armv7-a clang (trunk)
armv7-cpp4oclclang-trunk              | armv7-a clang (trunk)
armv7-oclcclang-trunk                 | armv7-a clang (trunk)
armv7-cpp4oclclang-trunk-assertions   | armv7-a clang (trunk, assertions)
armv7-oclcclang-trunk-assertions      | armv7-a clang (trunk, assertions)
armv7-clang1000                       | armv7-a clang 10.0.0
armv7-cclang1000                      | armv7-a clang 10.0.0
armv7-cpp4oclclang1000                | armv7-a clang 10.0.0
armv7-oclcclang1000                   | armv7-a clang 10.0.0
armv7-clang1001                       | armv7-a clang 10.0.1
armv7-cclang1001                      | armv7-a clang 10.0.1
armv7-cpp4oclclang1001                | armv7-a clang 10.0.1
armv7-oclcclang1001                   | armv7-a clang 10.0.1
armv7-clang1100                       | armv7-a clang 11.0.0
armv7-cclang1100                      | armv7-a clang 11.0.0
armv7-cpp4oclclang1100                | armv7-a clang 11.0.0
armv7-oclcclang1100                   | armv7-a clang 11.0.0
armv7-clang1101                       | armv7-a clang 11.0.1
armv7-cclang1101                      | armv7-a clang 11.0.1
armv7-cpp4oclclang1101                | armv7-a clang 11.0.1
armv7-oclcclang1101                   | armv7-a clang 11.0.1
armv7-clang1200                       | armv7-a clang 12.0.0
armv7-cclang1200                      | armv7-a clang 12.0.0
armv7-cpp4oclclang1200                | armv7-a clang 12.0.0
armv7-oclcclang1200                   | armv7-a clang 12.0.0
armv7-clang1201                       | armv7-a clang 12.0.1
armv7-cclang1201                      | armv7-a clang 12.0.1
armv7-clang1300                       | armv7-a clang 13.0.0
armv7-cclang1300                      | armv7-a clang 13.0.0
armv7-cpp4oclclang1300                | armv7-a clang 13.0.0
armv7-oclcclang1300                   | armv7-a clang 13.0.0
armv7-clang1301                       | armv7-a clang 13.0.1
armv7-cclang1301                      | armv7-a clang 13.0.1
armv7-clang1400                       | armv7-a clang 14.0.0
armv7-cclang1400                      | armv7-a clang 14.0.0
armv7-cpp4oclclang1400                | armv7-a clang 14.0.0
armv7-oclcclang1400                   | armv7-a clang 14.0.0
armv7-clang1500                       | armv7-a clang 15.0.0
armv7-cclang1500                      | armv7-a clang 15.0.0
armv7-cpp4oclclang1500                | armv7-a clang 15.0.0
armv7-oclcclang1500                   | armv7-a clang 15.0.0
armv7-clang1600                       | armv7-a clang 16.0.0
armv7-cclang1600                      | armv7-a clang 16.0.0
armv7-clang1701                       | armv7-a clang 17.0.1
armv7-cclang1701                      | armv7-a clang 17.0.1
armv7-clang1810                       | armv7-a clang 18.1.0
armv7-cclang1810                      | armv7-a clang 18.1.0
armv7-clang1910                       | armv7-a clang 19.1.0
armv7-clang900                        | armv7-a clang 9.0.0
armv7-cclang900                       | armv7-a clang 9.0.0
armv7-oclcclang900                    | armv7-a clang 9.0.0
armv7-clang901                        | armv7-a clang 9.0.1
armv7-cclang901                       | armv7-a clang 9.0.1
armv7-oclcclang901                    | armv7-a clang 9.0.1
armv8-full-clang-trunk                | armv8-a clang (all architectural features, trunk)
armv8-full-cclang-trunk               | armv8-a clang (all architectural features, trunk)
armv8-full-cpp4oclclang-trunk         | armv8-a clang (all architectural features, trunk)
armv8-full-oclcclang-trunk            | armv8-a clang (all architectural features, trunk)
armv8-clang-trunk                     | armv8-a clang (trunk)
armv8-cclang-trunk                    | armv8-a clang (trunk)
armv8-cpp4oclclang-trunk              | armv8-a clang (trunk)
armv8-oclcclang-trunk                 | armv8-a clang (trunk)
armv8-cpp4oclclang-trunk-assertions   | armv8-a clang (trunk, assertions)
armv8-oclcclang-trunk-assertions      | armv8-a clang (trunk, assertions)
armv8-clang1000                       | armv8-a clang 10.0.0
armv8-cclang1000                      | armv8-a clang 10.0.0
armv8-cpp4oclclang1000                | armv8-a clang 10.0.0
armv8-oclcclang1000                   | armv8-a clang 10.0.0
armv8-clang1001                       | armv8-a clang 10.0.1
armv8-cclang1001                      | armv8-a clang 10.0.1
armv8-cpp4oclclang1001                | armv8-a clang 10.0.1
armv8-oclcclang1001                   | armv8-a clang 10.0.1
armv8-clang1100                       | armv8-a clang 11.0.0
armv8-cclang1100                      | armv8-a clang 11.0.0
armv8-cpp4oclclang1100                | armv8-a clang 11.0.0
armv8-oclcclang1100                   | armv8-a clang 11.0.0
armv8-clang1101                       | armv8-a clang 11.0.1
armv8-cclang1101                      | armv8-a clang 11.0.1
armv8-cpp4oclclang1101                | armv8-a clang 11.0.1
armv8-oclcclang1101                   | armv8-a clang 11.0.1
armv8-clang1200                       | armv8-a clang 12.0.0
armv8-cclang1200                      | armv8-a clang 12.0.0
armv8-cpp4oclclang1200                | armv8-a clang 12.0.0
armv8-oclcclang1200                   | armv8-a clang 12.0.0
armv8-cclang1201                      | armv8-a clang 12.0.1
armv8-clang1300                       | armv8-a clang 13.0.0
armv8-cclang1300                      | armv8-a clang 13.0.0
armv8-cpp4oclclang1300                | armv8-a clang 13.0.0
armv8-oclcclang1300                   | armv8-a clang 13.0.0
armv8-cclang1301                      | armv8-a clang 13.0.1
armv8-clang1400                       | armv8-a clang 14.0.0
armv8-cclang1400                      | armv8-a clang 14.0.0
armv8-cpp4oclclang1400                | armv8-a clang 14.0.0
armv8-oclcclang1400                   | armv8-a clang 14.0.0
armv8-clang1500                       | armv8-a clang 15.0.0
armv8-cclang1500                      | armv8-a clang 15.0.0
armv8-cpp4oclclang1500                | armv8-a clang 15.0.0
armv8-oclcclang1500                   | armv8-a clang 15.0.0
armv8-clang1600                       | armv8-a clang 16.0.0
armv8-cclang1600                      | armv8-a clang 16.0.0
armv8-clang1701                       | armv8-a clang 17.0.1
armv8-cclang1701                      | armv8-a clang 17.0.1
armv8-clang1810                       | armv8-a clang 18.1.0
armv8-cclang1810                      | armv8-a clang 18.1.0
armv8-clang1910                       | armv8-a clang 19.1.0
armv8-clang900                        | armv8-a clang 9.0.0
armv8-cclang900                       | armv8-a clang 9.0.0
armv8-oclcclang900                    | armv8-a clang 9.0.0
armv8-clang901                        | armv8-a clang 9.0.1
armv8-cclang901                       | armv8-a clang 9.0.1
armv8-oclcclang901                    | armv8-a clang 9.0.1
c3c04                                 | c3 0.4.0
c3c050                                | c3 0.5.0
c3c055                                | c3 0.5.5
c3c060                                | c3 0.6.0
c3c061                                | c3 0.6.1
c3c062                                | c3 0.6.2
spirv32-cpp4oclclang-trunk            | clang & llvm-spirv (trunk)
spirv64-cpp4oclclang-trunk            | clang & llvm-spirv (trunk)
spirv32-oclcclang-trunk               | clang & llvm-spirv (trunk)
spirv64-oclcclang-trunk               | clang & llvm-spirv (trunk)
spirv32-cpp4oclclang-trunk-assertions | clang & llvm-spirv (trunk, assertions)
spirv64-cpp4oclclang-trunk-assertions | clang & llvm-spirv (trunk, assertions)
spirv32-oclcclang-trunk-assertions    | clang & llvm-spirv (trunk, assertions)
spirv64-oclcclang-trunk-assertions    | clang & llvm-spirv (trunk, assertions)
irclang-assertions-trunk              | clang (assertions trunk)
irclangtrunk                          | clang (trunk)
irclang1000                           | clang 10.0.0
irclang1001                           | clang 10.0.1
irclang1100                           | clang 11.0.0
irclang1101                           | clang 11.0.1
upmem-clang-2023-2                    | clang 12 for DPU (rel 2023.2.0)
irclang1200                           | clang 12.0.0
irclang1201                           | clang 12.0.1
irclang1300                           | clang 13.0.0
irclang1400                           | clang 14.0.0
irclang1500                           | clang 15.0.0
irclang1600                           | clang 16.0.0
irclang1701                           | clang 17.0.1
irclang1810                           | clang 18.1.0
irclang401                            | clang 4.0.1
irclang500                            | clang 5.0.0
irclang600                            | clang 6.0.0
irclang700                            | clang 7.0.0
cuclang700                            | clang 7.0.0 sm_70 CUDA-9.1
irclang800                            | clang 8.0.0
cuclang800                            | clang 8.0.0 sm_75 CUDA-10.0
irclang900                            | clang 9.0.0
cuclang900                            | clang 9.0.0 sm_75 CUDA-10.1
hipclang-rocm-40502                   | clang rocm-4.5.2
hipclang-rocm-50002                   | clang rocm-5.0.2
hipclang-rocm-50103                   | clang rocm-5.1.3
hipclang-rocm-50203                   | clang rocm-5.2.3
hipclang-rocm-50302                   | clang rocm-5.3.2
hipclang-rocm-50700                   | clang rocm-5.7.0
hipclang-rocm-60002                   | clang rocm-6.0.2
hipclang-rocm-60102                   | clang rocm-6.1.2
hipclang-staging-rocm-60102           | clang staging rocm-6.1.2
hiptrunk                              | clang trunk
hipclang-trunk-rocm-60102             | clang trunk rocm-6.1.2
clang-cl1810                          | clang-cl 18.1.0
cpp4oclclspv                          | clspv (trunk)
clspv                                 | clspv (trunk)
cpp4oclclvk                           | clvk-like (based on clspv trunk)
clvk                                  | clvk-like (based on clspv trunk)
cmake-3_26_1                          | cmake 3.26.1
cmake-3_26_4                          | cmake 3.26.4
cmake-3_27_9                          | cmake 3.27.9
cmake-3_28_0                          | cmake 3.28.0
cmake-3_28_4                          | cmake 3.28.4
cmake-3_29_2                          | cmake 3.29.2
cmake-3_29_20240506_g1ea8fa8          | cmake 3.29.20240506-g1ea8fa8
cppfront_trunk                        | cppfront trunk
cproc-master                          | cproc-master
java-d8-8156                          | d8 8.1.56
kotlin-d8-8156                        | d8 8.1.56
java-d8-8172                          | d8 8.1.72
kotlin-d8-8172                        | d8 8.1.72
java-d8-8233                          | d8 8.2.33
kotlin-d8-8233                        | d8 8.2.33
java-d8-8242                          | d8 8.2.42
kotlin-d8-8242                        | d8 8.2.42
java-d8-8247                          | d8 8.2.47
kotlin-d8-8247                        | d8 8.2.47
java-d8-8336                          | d8 8.3.36
kotlin-d8-8336                        | d8 8.3.36
java-d8-8337                          | d8 8.3.37
kotlin-d8-8337                        | d8 8.3.37
java-d8-8510                          | d8 8.5.10
kotlin-d8-8510                        | d8 8.5.10
java-d8-8527                          | d8 8.5.27
kotlin-d8-8527                        | d8 8.5.27
java-d8-8535                          | d8 8.5.35
kotlin-d8-8535                        | d8 8.5.35
dmd20783                              | dmd 2.078.3
dmd20790                              | dmd 2.079.0
dmd20791                              | dmd 2.079.1
dmd20801                              | dmd 2.080.1
dmd20812                              | dmd 2.081.2
dmd20820                              | dmd 2.082.0
dmd20890                              | dmd 2.089.0
dmd20920                              | dmd 2.092.0
dmd20942                              | dmd 2.094.2
dmd2nightly                           | dmd nightly
ellcc0133                             | ellcc 0.1.33
ellcc0134                             | ellcc 0.1.34
ellcc170716                           | ellcc 2017-07-16
flangtrunk                            | flang-trunk
flangtrunk-fc                         | flang-trunk-fc1
gdctrunk                              | gdc (trunk)
gdc101                                | gdc 10.1
gdc102                                | gdc 10.2
gdc105                                | gdc 10.5
gdc111                                | gdc 11.1
gdc113                                | gdc 11.3
gdc114                                | gdc 11.4
gdc121                                | gdc 12.1
gdc122                                | gdc 12.2
gdc123                                | gdc 12.3
gdc124                                | gdc 12.4
gdc131                                | gdc 13.1
gdc132                                | gdc 13.2
gdc133                                | gdc 13.3
gdc141                                | gdc 14.1
gdc142                                | gdc 14.2
gdc48                                 | gdc 4.8.2
gdc49                                 | gdc 4.9.3
gdc52                                 | gdc 5.2.0
gdc92                                 | gdc 9.2
gdc93                                 | gdc 9.3
gdc95                                 | gdc 9.5
gdcarm1220                            | gdc arm 12.2.0
gdcarm1230                            | gdc arm 12.3.0
gdcarm1240                            | gdc arm 12.4.0
gdcarm1310                            | gdc arm 13.1.0
gdcarm1320                            | gdc arm 13.2.0
gdcarm1330                            | gdc arm 13.3.0
gdcarm1410                            | gdc arm 14.1.0
gdcarm1420                            | gdc arm 14.2.0
gdcarm641220                          | gdc arm64 12.2.0
gdcarm641230                          | gdc arm64 12.3.0
gdcarm641240                          | gdc arm64 12.4.0
gdcarm641310                          | gdc arm64 13.1.0
gdcarm641320                          | gdc arm64 13.2.0
gdcarm641330                          | gdc arm64 13.3.0
gdcarm641410                          | gdc arm64 14.1.0
gdcarm641420                          | gdc arm64 14.2.0
gdchppa1420                           | gdc hppa 14.2.0
gdcloongarch641410                    | gdc loongarch64 14.1.0
gdcloongarch641420                    | gdc loongarch64 14.2.0
gdcmips1210                           | gdc mips 12.1.0
gdcmips1220                           | gdc mips 12.2.0
gdcmips1230                           | gdc mips 12.3.0
gdcmips1240                           | gdc mips 12.4.0
gdcmips1310                           | gdc mips 13.1.0
gdcmips1320                           | gdc mips 13.2.0
gdcmips1330                           | gdc mips 13.3.0
gdcmips1410                           | gdc mips 14.1.0
gdcmips1420                           | gdc mips 14.2.0
gdcmips641210                         | gdc mips64 12.1.0
gdcmips641220                         | gdc mips64 12.2.0
gdcmips641230                         | gdc mips64 12.3.0
gdcmips641240                         | gdc mips64 12.4.0
gdcmips641310                         | gdc mips64 13.1.0
gdcmips641320                         | gdc mips64 13.2.0
gdcmips641330                         | gdc mips64 13.3.0
gdcmips641410                         | gdc mips64 14.1.0
gdcmips641420                         | gdc mips64 14.2.0
gdcmipsel1210                         | gdc mipsel 12.1.0
gdcmipsel1220                         | gdc mipsel 12.2.0
gdcmipsel1230                         | gdc mipsel 12.3.0
gdcmipsel1240                         | gdc mipsel 12.4.0
gdcmipsel1310                         | gdc mipsel 13.1.0
gdcmipsel1320                         | gdc mipsel 13.2.0
gdcmipsel1330                         | gdc mipsel 13.3.0
gdcmipsel1410                         | gdc mipsel 14.1.0
gdcmipsel1420                         | gdc mipsel 14.2.0
gdcppc1210                            | gdc powerpc 12.1.0
gdcppc1220                            | gdc powerpc 12.2.0
gdcppc1230                            | gdc powerpc 12.3.0
gdcppc1240                            | gdc powerpc 12.4.0
gdcppc1310                            | gdc powerpc 13.1.0
gdcppc1320                            | gdc powerpc 13.2.0
gdcppc1330                            | gdc powerpc 13.3.0
gdcppc1410                            | gdc powerpc 14.1.0
gdcppc1420                            | gdc powerpc 14.2.0
gdcppc641210                          | gdc powerpc64 12.1.0
gdcppc641220                          | gdc powerpc64 12.2.0
gdcppc641230                          | gdc powerpc64 12.3.0
gdcppc641240                          | gdc powerpc64 12.4.0
gdcppc641310                          | gdc powerpc64 13.1.0
gdcppc641320                          | gdc powerpc64 13.2.0
gdcppc641330                          | gdc powerpc64 13.3.0
gdcppc641410                          | gdc powerpc64 14.1.0
gdcppc641420                          | gdc powerpc64 14.2.0
gdcppc64trunk                         | gdc powerpc64 trunk
gdcppc64le1210                        | gdc powerpc64le 12.1.0
gdcppc64le1220                        | gdc powerpc64le 12.2.0
gdcppc64le1230                        | gdc powerpc64le 12.3.0
gdcppc64le1240                        | gdc powerpc64le 12.4.0
gdcppc64le1310                        | gdc powerpc64le 13.1.0
gdcppc64le1320                        | gdc powerpc64le 13.2.0
gdcppc64le1330                        | gdc powerpc64le 13.3.0
gdcppc64le1410                        | gdc powerpc64le 14.1.0
gdcppc64le1420                        | gdc powerpc64le 14.2.0
gdcppc64letrunk                       | gdc powerpc64le trunk
gdcriscv1220                          | gdc riscv32 12.2.0
gdcriscv1230                          | gdc riscv32 12.3.0
gdcriscv1240                          | gdc riscv32 12.4.0
gdcriscv1310                          | gdc riscv32 13.1.0
gdcriscv1320                          | gdc riscv32 13.2.0
gdcriscv1330                          | gdc riscv32 13.3.0
gdcriscv1410                          | gdc riscv32 14.1.0
gdcriscv1420                          | gdc riscv32 14.2.0
gdcriscv32trunk                       | gdc riscv32 trunk
gdcriscv641220                        | gdc riscv64 12.2.0
gdcriscv641230                        | gdc riscv64 12.3.0
gdcriscv641240                        | gdc riscv64 12.4.0
gdcriscv641310                        | gdc riscv64 13.1.0
gdcriscv641320                        | gdc riscv64 13.2.0
gdcriscv641330                        | gdc riscv64 13.3.0
gdcriscv641410                        | gdc riscv64 14.1.0
gdcriscv641420                        | gdc riscv64 14.2.0
gdcriscv64trunk                       | gdc riscv64 trunk
gdcs390x1210                          | gdc s390x 12.1.0
gdcs390x1220                          | gdc s390x 12.2.0
gdcs390x1230                          | gdc s390x 12.3.0
gdcs390x1240                          | gdc s390x 12.4.0
gdcs390x1310                          | gdc s390x 13.1.0
gdcs390x1320                          | gdc s390x 13.2.0
gdcs390x1330                          | gdc s390x 13.3.0
gdcs390x1410                          | gdc s390x 14.1.0
gdcs390x1420                          | gdc s390x 14.2.0
hexagonclang1605                      | hexagon-clang 16.0.5
objchppag1420                         | hppa gcc 14.2.0
gnathppa1420                          | hppa gnat 14.2.0
ispc-templates_new-trunk              | ispc (templates_new)
ispc-trunk                            | ispc (trunk)
ispc1100                              | ispc 1.10.0
ispc1110                              | ispc 1.11.0
ispc1120                              | ispc 1.12.0
ispc1130                              | ispc 1.13.0
ispc1140                              | ispc 1.14.0
ispc1141                              | ispc 1.14.1
ispc1150                              | ispc 1.15.0
ispc1160                              | ispc 1.16.0
ispc1161                              | ispc 1.16.1
ispc1170                              | ispc 1.17.0
ispc1180                              | ispc 1.18.0
ispc1190                              | ispc 1.19.0
ispc1200                              | ispc 1.20.0
ispc1210                              | ispc 1.21.0
ispc1220                              | ispc 1.22.0
ispc1230                              | ispc 1.23.0
ispc1240                              | ispc 1.24.0
ispc1250                              | ispc 1.25.0
ispc191                               | ispc 1.9.1
ispc192                               | ispc 1.9.2
java1002                              | jdk 10.0.2
java1102                              | jdk 11.0.2
java1201                              | jdk 12.0.1
java1202                              | jdk 12.0.2
java1302                              | jdk 13.0.2
java1402                              | jdk 14.0.2
java1502                              | jdk 15.0.2
java1601                              | jdk 16.0.1
java1700                              | jdk 17.0.0
java1702                              | jdk 17.0.2
java1800                              | jdk 18.0.0
java1802                              | jdk 18.0.2
java1902                              | jdk 19.0.2
java2000                              | jdk 20.0.0
java2002                              | jdk 20.0.2
java2100                              | jdk 21.0.0
java2102                              | jdk 21.0.2
java2200                              | jdk 22.0.0
java8u402b06                          | jdk 8.402.6
java904                               | jdk 9.0.4
kotlinc1400                           | kotlinc 1.4.0
kotlinc1410                           | kotlinc 1.4.10
kotlinc1420                           | kotlinc 1.4.20
kotlinc1421                           | kotlinc 1.4.21
kotlinc1430                           | kotlinc 1.4.30
kotlinc1431                           | kotlinc 1.4.31
kotlinc1432                           | kotlinc 1.4.32
kotlinc1500                           | kotlinc 1.5.0
kotlinc1510                           | kotlinc 1.5.10
kotlinc1520                           | kotlinc 1.5.20
kotlinc1521                           | kotlinc 1.5.21
kotlinc1530                           | kotlinc 1.5.30
kotlinc1531                           | kotlinc 1.5.31
kotlinc1600                           | kotlinc 1.6.0
kotlinc1610                           | kotlinc 1.6.10
kotlinc1620                           | kotlinc 1.6.20
kotlinc1700                           | kotlinc 1.7.0
kotlinc1800                           | kotlinc 1.8.0
kotlinc1810                           | kotlinc 1.8.10
kotlinc1820                           | kotlinc 1.8.20
kotlinc1900                           | kotlinc 1.9.0
kotlinc1910                           | kotlinc 1.9.10
kotlinc1920                           | kotlinc 1.9.20
kotlinc2000                           | kotlinc 2.0.0
ldc017                                | ldc 0.17.2
ldc100                                | ldc 1.0.0
ldc110                                | ldc 1.1.0
ldc1_10                               | ldc 1.10.0
ldc1_11                               | ldc 1.11.0
ldc1_12                               | ldc 1.12.0
ldc1_13                               | ldc 1.13.0
ldc1_14                               | ldc 1.14.0
ldc1_15                               | ldc 1.15.0
ldc1_16                               | ldc 1.16.0
ldc1_17                               | ldc 1.17.0
ldc1_18                               | ldc 1.18.0
ldc1_19                               | ldc 1.19.0
ldc120                                | ldc 1.2.0
ldc1_20                               | ldc 1.20.0
ldc1_21                               | ldc 1.21.0
ldc1_22                               | ldc 1.22.0
ldc1_23                               | ldc 1.23.0
ldc1_24                               | ldc 1.24.0
ldc1_25                               | ldc 1.25.1
ldc1_26                               | ldc 1.26.0
ldc1_27                               | ldc 1.27.1
ldc1_28                               | ldc 1.28.1
ldc1_29                               | ldc 1.29.0
ldc130                                | ldc 1.3.0
ldc1_30                               | ldc 1.30.0
ldc1_31                               | ldc 1.31.0
ldc1_32                               | ldc 1.32.1
ldc1_33                               | ldc 1.33.0
ldc1_34                               | ldc 1.34.0
ldc1_35                               | ldc 1.35.0
ldc1_36                               | ldc 1.36.0
ldc1_37                               | ldc 1.37.0
ldc1_38                               | ldc 1.38.0
ldc1_39                               | ldc 1.39.0
ldc140                                | ldc 1.4.0
ldc150                                | ldc 1.5.0
ldc160                                | ldc 1.6.0
ldc170                                | ldc 1.7.0
ldc180                                | ldc 1.8.0
ldc190                                | ldc 1.9.0
ldcbeta                               | ldc beta
ldclatestci                           | ldc latest CI
llc-assertions-trunk                  | llc (assertions trunk)
mirllc-assertions-trunk               | llc (assertions trunk)
llctrunk                              | llc (trunk)
mirllctrunk                           | llc (trunk)
llc1000                               | llc 10.0.0
mirllc1000                            | llc 10.0.0
llc1001                               | llc 10.0.1
mirllc1001                            | llc 10.0.1
llc1100                               | llc 11.0.0
mirllc1100                            | llc 11.0.0
llc1101                               | llc 11.0.1
mirllc1101                            | llc 11.0.1
llc1200                               | llc 12.0.0
mirllc1200                            | llc 12.0.0
llc1201                               | llc 12.0.1
mirllc1201                            | llc 12.0.1
llc1300                               | llc 13.0.0
mirllc1300                            | llc 13.0.0
llc1400                               | llc 14.0.0
mirllc1400                            | llc 14.0.0
llc1500                               | llc 15.0.0
mirllc1500                            | llc 15.0.0
llc1600                               | llc 16.0.0
mirllc1600                            | llc 16.0.0
llc1701                               | llc 17.0.1
mirllc1701                            | llc 17.0.1
llc1810                               | llc 18.1.0
mirllc1810                            | llc 18.1.0
llc32                                 | llc 3.2
mirllc32                              | llc 3.2
llc33                                 | llc 3.3
mirllc33                              | llc 3.3
llc391                                | llc 3.9.1
mirllc391                             | llc 3.9.1
llc400                                | llc 4.0.0
mirllc400                             | llc 4.0.0
llc401                                | llc 4.0.1
mirllc401                             | llc 4.0.1
llc500                                | llc 5.0.0
mirllc500                             | llc 5.0.0
llc600                                | llc 6.0.0
mirllc600                             | llc 6.0.0
llc700                                | llc 7.0.0
mirllc700                             | llc 7.0.0
llc800                                | llc 8.0.0
mirllc800                             | llc 8.0.0
llc900                                | llc 9.0.0
mirllc900                             | llc 9.0.0
llvm-mca-assertions-trunk             | llvm-mca (assertions trunk)
llvm-mcatrunk                         | llvm-mca (trunk)
mos-atari2600-3e-trunk                | llvm-mos atari2600-3e
mos-atari2600-4k-trunk                | llvm-mos atari2600-4k
mos-atari2600-common-trunk            | llvm-mos atari2600-common
mos-atari5200-supercart-trunk         | llvm-mos atari5200-supercart
mos-atari8-cart-megacart-trunk        | llvm-mos atari8-cart-megacart
mos-atari8-cart-std-trunk             | llvm-mos atari8-cart-std
mos-atari8-cart-xegs-trunk            | llvm-mos atari8-cart-xegs
mos-atari8-common-trunk               | llvm-mos atari8-common
mos-atari8-dos-trunk                  | llvm-mos atari8-dos
mos-c128-trunk                        | llvm-mos c128
mos-c64-trunk                         | llvm-mos c64
cmos-cx16-trunk                       | llvm-mos commander X16
mos-commodore-trunk                   | llvm-mos commodore
cmos-c64-trunk                        | llvm-mos commodore 64
mos-cpm65-trunk                       | llvm-mos cpm65
mos-cx16-trunk                        | llvm-mos cx16
mos-dodo-trunk                        | llvm-mos dodo
mos-eater-trunk                       | llvm-mos eater
mos-mega65-trunk                      | llvm-mos mega65
cmos-mega65-trunk                     | llvm-mos mega65
mos-nes-trunk                         | llvm-mos nes
mos-nes-action53-trunk                | llvm-mos nes-action53
mos-nes-cnrom-trunk                   | llvm-mos nes-cnrom
cmos-nes-cnrom-trunk                  | llvm-mos nes-cnrom
mos-nes-gtrom-trunk                   | llvm-mos nes-gtrom
mos-nes-mmc1-trunk                    | llvm-mos nes-mmc1
cmos-nes-mmc1-trunk                   | llvm-mos nes-mmc1
mos-nes-mmc3-trunk                    | llvm-mos nes-mmc3
cmos-nes-mmc3-trunk                   | llvm-mos nes-mmc3
mos-nes-nrom-trunk                    | llvm-mos nes-nrom
cmos-nes-nrom-trunk                   | llvm-mos nes-nrom
mos-nes-unrom-trunk                   | llvm-mos nes-unrom
mos-nes-unrom-512-trunk               | llvm-mos nes-unrom-512
mos-osi-c1p-trunk                     | llvm-mos osi-c1p
cmos-osi-c1p-trunk                    | llvm-mos osi-c1p
mos-pce-trunk                         | llvm-mos pce
mos-pce-cd-trunk                      | llvm-mos pce-cd
mos-pce-common-trunk                  | llvm-mos pce-common
mos-pet-trunk                         | llvm-mos pet
mos-rp6502-trunk                      | llvm-mos rp6502
mos-rpc8e-trunk                       | llvm-mos rpc8e
mos-supervision-trunk                 | llvm-mos supervision
mos-vic20-trunk                       | llvm-mos vic20
loongarch64g1220                      | loongarch64 gcc 12.2.0
cloongarch64g1220                     | loongarch64 gcc 12.2.0
objcloongarch64g1220                  | loongarch64 gcc 12.2.0
gimpleloongarch64g1220                | loongarch64 gcc 12.2.0
loongarch64g1230                      | loongarch64 gcc 12.3.0
cloongarch64g1230                     | loongarch64 gcc 12.3.0
objcloongarch64g1230                  | loongarch64 gcc 12.3.0
gimpleloongarch64g1230                | loongarch64 gcc 12.3.0
loongarch64g1240                      | loongarch64 gcc 12.4.0
cloongarch64g1240                     | loongarch64 gcc 12.4.0
objcloongarch64g1240                  | loongarch64 gcc 12.4.0
loongarch64g1310                      | loongarch64 gcc 13.1.0
cloongarch64g1310                     | loongarch64 gcc 13.1.0
objcloongarch64g1310                  | loongarch64 gcc 13.1.0
gimpleloongarch64g1310                | loongarch64 gcc 13.1.0
loongarch64g1320                      | loongarch64 gcc 13.2.0
cloongarch64g1320                     | loongarch64 gcc 13.2.0
objcloongarch64g1320                  | loongarch64 gcc 13.2.0
gimpleloongarch64g1320                | loongarch64 gcc 13.2.0
loongarch64g1330                      | loongarch64 gcc 13.3.0
cloongarch64g1330                     | loongarch64 gcc 13.3.0
objcloongarch64g1330                  | loongarch64 gcc 13.3.0
gimpleloongarch64g1330                | loongarch64 gcc 13.3.0
loongarch64g1410                      | loongarch64 gcc 14.1.0
cloongarch64g1410                     | loongarch64 gcc 14.1.0
objcloongarch64g1410                  | loongarch64 gcc 14.1.0
gimpleloongarch64g1410                | loongarch64 gcc 14.1.0
loongarch64g1420                      | loongarch64 gcc 14.2.0
cloongarch64g1420                     | loongarch64 gcc 14.2.0
objcloongarch64g1420                  | loongarch64 gcc 14.2.0
gimpleloongarch64g1420                | loongarch64 gcc 14.2.0
gnatloongarch641410                   | loongarch64 gnat 14.1.0
gnatloongarch641420                   | loongarch64 gnat 14.2.0
mptrunk                               | madpascal trunk
cmipselg1210                          | mips (el) gcc 12.1.0
gimplemipselg1210                     | mips (el) gcc 12.1.0
cmipselg1220                          | mips (el) gcc 12.2.0
objcmipselg1220                       | mips (el) gcc 12.2.0
gimplemipselg1220                     | mips (el) gcc 12.2.0
cmipselg1230                          | mips (el) gcc 12.3.0
objcmipselg1230                       | mips (el) gcc 12.3.0
gimplemipselg1230                     | mips (el) gcc 12.3.0
cmipselg1240                          | mips (el) gcc 12.4.0
objcmipselg1240                       | mips (el) gcc 12.4.0
cmipselg1310                          | mips (el) gcc 13.1.0
objcmipselg1310                       | mips (el) gcc 13.1.0
gimplemipselg1310                     | mips (el) gcc 13.1.0
cmipselg1320                          | mips (el) gcc 13.2.0
objcmipselg1320                       | mips (el) gcc 13.2.0
gimplemipselg1320                     | mips (el) gcc 13.2.0
cmipselg1330                          | mips (el) gcc 13.3.0
objcmipselg1330                       | mips (el) gcc 13.3.0
gimplemipselg1330                     | mips (el) gcc 13.3.0
cmipselg1410                          | mips (el) gcc 14.1.0
objcmipselg1410                       | mips (el) gcc 14.1.0
gimplemipselg1410                     | mips (el) gcc 14.1.0
cmipselg1420                          | mips (el) gcc 14.2.0
objcmipselg1420                       | mips (el) gcc 14.2.0
gimplemipselg1420                     | mips (el) gcc 14.2.0
cmipselg494                           | mips (el) gcc 4.9.4
cmips5el                              | mips (el) gcc 5.4
cmipselg550                           | mips (el) gcc 5.5.0
cmipselg950                           | mips (el) gcc 9.5.0
mips-clang1300                        | mips clang 13.0.0
mips-cclang1300                       | mips clang 13.0.0
mips-clang1400                        | mips clang 14.0.0
mips-cclang1400                       | mips clang 14.0.0
mips-clang1500                        | mips clang 15.0.0
mips-cclang1500                       | mips clang 15.0.0
mips-clang1600                        | mips clang 16.0.0
mips-cclang1600                       | mips clang 16.0.0
mips-clang1701                        | mips clang 17.0.1
mips-cclang1701                       | mips clang 17.0.1
mips-clang1810                        | mips clang 18.1.0
mips-cclang1810                       | mips clang 18.1.0
mips-clang1910                        | mips clang 19.1.0
mips1120                              | mips gcc 11.2.0
cmips1120                             | mips gcc 11.2.0
gimplemips1120                        | mips gcc 11.2.0
mipsg1210                             | mips gcc 12.1.0
cmipsg1210                            | mips gcc 12.1.0
gimplemipsg1210                       | mips gcc 12.1.0
mipsg1220                             | mips gcc 12.2.0
cmipsg1220                            | mips gcc 12.2.0
objcmipsg1220                         | mips gcc 12.2.0
gimplemipsg1220                       | mips gcc 12.2.0
mipsg1230                             | mips gcc 12.3.0
cmipsg1230                            | mips gcc 12.3.0
objcmipsg1230                         | mips gcc 12.3.0
gimplemipsg1230                       | mips gcc 12.3.0
mipsg1240                             | mips gcc 12.4.0
cmipsg1240                            | mips gcc 12.4.0
objcmipsg1240                         | mips gcc 12.4.0
mipsg1310                             | mips gcc 13.1.0
cmipsg1310                            | mips gcc 13.1.0
objcmipsg1310                         | mips gcc 13.1.0
gimplemipsg1310                       | mips gcc 13.1.0
mipsg1320                             | mips gcc 13.2.0
cmipsg1320                            | mips gcc 13.2.0
objcmipsg1320                         | mips gcc 13.2.0
gimplemipsg1320                       | mips gcc 13.2.0
mipsg1330                             | mips gcc 13.3.0
cmipsg1330                            | mips gcc 13.3.0
objcmipsg1330                         | mips gcc 13.3.0
gimplemipsg1330                       | mips gcc 13.3.0
mipsg1410                             | mips gcc 14.1.0
cmipsg1410                            | mips gcc 14.1.0
objcmipsg1410                         | mips gcc 14.1.0
gimplemipsg1410                       | mips gcc 14.1.0
mipsg1420                             | mips gcc 14.2.0
cmipsg1420                            | mips gcc 14.2.0
objcmipsg1420                         | mips gcc 14.2.0
gimplemipsg1420                       | mips gcc 14.2.0
mipsg494                              | mips gcc 4.9.4
cmipsg494                             | mips gcc 4.9.4
mips5                                 | mips gcc 5.4
cmips5                                | mips gcc 5.4
mipsg550                              | mips gcc 5.5.0
cmipsg550                             | mips gcc 5.5.0
mips930                               | mips gcc 9.3.0 (codescape)
cmips930                              | mips gcc 9.3.0 (codescape)
gimplemips930                         | mips gcc 9.3.0 (codescape)
mipsg950                              | mips gcc 9.5.0
cmipsg950                             | mips gcc 9.5.0
gnatmips1120                          | mips gnat 11.2.0
gnatmips1210                          | mips gnat 12.1.0
gnatmips1220                          | mips gnat 12.2.0
gnatmips1230                          | mips gnat 12.3.0
gnatmips1240                          | mips gnat 12.4.0
gnatmips1310                          | mips gnat 13.1.0
gnatmips1320                          | mips gnat 13.2.0
gnatmips1330                          | mips gnat 13.3.0
gnatmips1410                          | mips gnat 14.1.0
gnatmips1420                          | mips gnat 14.2.0
mips64elg1210                         | mips64 (el) gcc 12.1.0
cmips64elg1210                        | mips64 (el) gcc 12.1.0
gimplemips64elg1210                   | mips64 (el) gcc 12.1.0
mips64elg1220                         | mips64 (el) gcc 12.2.0
cmips64elg1220                        | mips64 (el) gcc 12.2.0
objcmips64elg1220                     | mips64 (el) gcc 12.2.0
gimplemips64elg1220                   | mips64 (el) gcc 12.2.0
mips64elg1230                         | mips64 (el) gcc 12.3.0
cmips64elg1230                        | mips64 (el) gcc 12.3.0
objcmips64elg1230                     | mips64 (el) gcc 12.3.0
gimplemips64elg1230                   | mips64 (el) gcc 12.3.0
mips64elg1240                         | mips64 (el) gcc 12.4.0
cmips64elg1240                        | mips64 (el) gcc 12.4.0
objcmips64elg1240                     | mips64 (el) gcc 12.4.0
mips64elg1310                         | mips64 (el) gcc 13.1.0
cmips64elg1310                        | mips64 (el) gcc 13.1.0
objcmips64elg1310                     | mips64 (el) gcc 13.1.0
gimplemips64elg1310                   | mips64 (el) gcc 13.1.0
mips64elg1320                         | mips64 (el) gcc 13.2.0
cmips64elg1320                        | mips64 (el) gcc 13.2.0
objcmips64elg1320                     | mips64 (el) gcc 13.2.0
gimplemips64elg1320                   | mips64 (el) gcc 13.2.0
mips64elg1330                         | mips64 (el) gcc 13.3.0
cmips64elg1330                        | mips64 (el) gcc 13.3.0
objcmips64elg1330                     | mips64 (el) gcc 13.3.0
gimplemips64elg1330                   | mips64 (el) gcc 13.3.0
mips64elg1410                         | mips64 (el) gcc 14.1.0
cmips64elg1410                        | mips64 (el) gcc 14.1.0
objcmips64elg1410                     | mips64 (el) gcc 14.1.0
gimplemips64elg1410                   | mips64 (el) gcc 14.1.0
mips64elg1420                         | mips64 (el) gcc 14.2.0
cmips64elg1420                        | mips64 (el) gcc 14.2.0
objcmips64elg1420                     | mips64 (el) gcc 14.2.0
gimplemips64elg1420                   | mips64 (el) gcc 14.2.0
mips64elg494                          | mips64 (el) gcc 4.9.4
cmips64elg494                         | mips64 (el) gcc 4.9.4
mips564el                             | mips64 (el) gcc 5.4.0
cmips564el                            | mips64 (el) gcc 5.4.0
mips64elg550                          | mips64 (el) gcc 5.5.0
cmips64elg550                         | mips64 (el) gcc 5.5.0
mips64elg950                          | mips64 (el) gcc 9.5.0
cmips64elg950                         | mips64 (el) gcc 9.5.0
mips64-clang1300                      | mips64 clang 13.0.0
mips64-cclang1300                     | mips64 clang 13.0.0
mips64-clang1400                      | mips64 clang 14.0.0
mips64-cclang1400                     | mips64 clang 14.0.0
mips64-clang1500                      | mips64 clang 15.0.0
mips64-cclang1500                     | mips64 clang 15.0.0
mips64-clang1600                      | mips64 clang 16.0.0
mips64-cclang1600                     | mips64 clang 16.0.0
mips64-clang1701                      | mips64 clang 17.0.1
mips64-cclang1701                     | mips64 clang 17.0.1
mips64-clang1810                      | mips64 clang 18.1.0
mips64-cclang1810                     | mips64 clang 18.1.0
mips64-clang1910                      | mips64 clang 19.1.0
mips112064                            | mips64 gcc 11.2.0
cmips112064                           | mips64 gcc 11.2.0
gimplemips112064                      | mips64 gcc 11.2.0
mips64g1210                           | mips64 gcc 12.1.0
cmips64g1210                          | mips64 gcc 12.1.0
gimplemips64g1210                     | mips64 gcc 12.1.0
mips64g1220                           | mips64 gcc 12.2.0
cmips64g1220                          | mips64 gcc 12.2.0
gimplemips64g1220                     | mips64 gcc 12.2.0
mips64g1230                           | mips64 gcc 12.3.0
cmips64g1230                          | mips64 gcc 12.3.0
gimplemips64g1230                     | mips64 gcc 12.3.0
mips64g1240                           | mips64 gcc 12.4.0
cmips64g1240                          | mips64 gcc 12.4.0
mips64g1310                           | mips64 gcc 13.1.0
cmips64g1310                          | mips64 gcc 13.1.0
gimplemips64g1310                     | mips64 gcc 13.1.0
mips64g1320                           | mips64 gcc 13.2.0
cmips64g1320                          | mips64 gcc 13.2.0
gimplemips64g1320                     | mips64 gcc 13.2.0
mips64g1330                           | mips64 gcc 13.3.0
cmips64g1330                          | mips64 gcc 13.3.0
gimplemips64g1330                     | mips64 gcc 13.3.0
mips64g1410                           | mips64 gcc 14.1.0
cmips64g1410                          | mips64 gcc 14.1.0
gimplemips64g1410                     | mips64 gcc 14.1.0
mips64g1420                           | mips64 gcc 14.2.0
cmips64g1420                          | mips64 gcc 14.2.0
gimplemips64g1420                     | mips64 gcc 14.2.0
mips64g494                            | mips64 gcc 4.9.4
cmips64g494                           | mips64 gcc 4.9.4
cmips564                              | mips64 gcc 5.4
mips564                               | mips64 gcc 5.4.0
mips64g550                            | mips64 gcc 5.5.0
cmips64g550                           | mips64 gcc 5.5.0
mips64g950                            | mips64 gcc 9.5.0
cmips64g950                           | mips64 gcc 9.5.0
gnatmips641120                        | mips64 gnat 11.2.0
gnatmips641210                        | mips64 gnat 12.1.0
gnatmips641220                        | mips64 gnat 12.2.0
gnatmips641230                        | mips64 gnat 12.3.0
gnatmips641240                        | mips64 gnat 12.4.0
gnatmips641310                        | mips64 gnat 13.1.0
gnatmips641320                        | mips64 gnat 13.2.0
gnatmips641330                        | mips64 gnat 13.3.0
gnatmips641410                        | mips64 gnat 14.1.0
gnatmips641420                        | mips64 gnat 14.2.0
mips64el-clang1300                    | mips64el clang 13.0.0
mips64el-cclang1300                   | mips64el clang 13.0.0
mips64el-clang1400                    | mips64el clang 14.0.0
mips64el-cclang1400                   | mips64el clang 14.0.0
mips64el-clang1500                    | mips64el clang 15.0.0
mips64el-cclang1500                   | mips64el clang 15.0.0
mips64el-clang1600                    | mips64el clang 16.0.0
mips64el-cclang1600                   | mips64el clang 16.0.0
mips64el-clang1701                    | mips64el clang 17.0.1
mips64el-cclang1701                   | mips64el clang 17.0.1
mips64el-clang1810                    | mips64el clang 18.1.0
mips64el-cclang1810                   | mips64el clang 18.1.0
mips64el-clang1910                    | mips64el clang 19.1.0
mipsel-clang1300                      | mipsel clang 13.0.0
mipsel-cclang1300                     | mipsel clang 13.0.0
mipsel-clang1400                      | mipsel clang 14.0.0
mipsel-cclang1400                     | mipsel clang 14.0.0
mipsel-clang1500                      | mipsel clang 15.0.0
mipsel-cclang1500                     | mipsel clang 15.0.0
mipsel-clang1600                      | mipsel clang 16.0.0
mipsel-cclang1600                     | mipsel clang 16.0.0
mipsel-clang1701                      | mipsel clang 17.0.1
mipsel-cclang1701                     | mipsel clang 17.0.1
mipsel-clang1810                      | mipsel clang 18.1.0
mipsel-cclang1810                     | mipsel clang 18.1.0
mipsel-clang1910                      | mipsel clang 19.1.0
mipselg1210                           | mipsel gcc 12.1.0
mipselg1220                           | mipsel gcc 12.2.0
mipselg1230                           | mipsel gcc 12.3.0
mipselg1240                           | mipsel gcc 12.4.0
mipselg1310                           | mipsel gcc 13.1.0
mipselg1320                           | mipsel gcc 13.2.0
mipselg1330                           | mipsel gcc 13.3.0
mipselg1410                           | mipsel gcc 14.1.0
mipselg1420                           | mipsel gcc 14.2.0
mipselg494                            | mipsel gcc 4.9.4
mips5el                               | mipsel gcc 5.4.0
mipselg550                            | mipsel gcc 5.5.0
mipselg950                            | mipsel gcc 9.5.0
movfuscatortrunk                      | movfuscator (trunk)
mrustc-master                         | mrustc (master)
cnanomips630                          | nanoMIPS gcc 6.3.0
nanomips630                           | nanoMIPS gcc 6.3.0 (mtk)
nimtrunk                              | nim (trunk)
nim104                                | nim 1.0.4
nim106                                | nim 1.0.6
nim120                                | nim 1.2.0
nim142                                | nim 1.4.2
nim144                                | nim 1.4.4
nim146                                | nim 1.4.6
nim148                                | nim 1.4.8
nim160                                | nim 1.6.0
nim1616                               | nim 1.6.16
nim200                                | nim 2.0.0
objcpploongarch64g1410                | objcpploongarch64g1410
objcpploongarch64g1420                | objcpploongarch64g1420
opt-assertions-trunk                  | opt (assertions trunk)
opttrunk                              | opt (trunk)
opt1000                               | opt 10.0.0
opt1001                               | opt 10.0.1
opt1100                               | opt 11.0.0
opt1101                               | opt 11.0.1
opt1200                               | opt 12.0.0
opt1201                               | opt 12.0.1
opt1300                               | opt 13.0.0
opt1400                               | opt 14.0.0
opt1500                               | opt 15.0.0
opt1600                               | opt 16.0.0
opt1701                               | opt 17.0.1
opt1810                               | opt 18.1.0
opt32                                 | opt 3.2
opt33                                 | opt 3.3
opt391                                | opt 3.9.1
opt400                                | opt 4.0.0
opt401                                | opt 4.0.1
opt500                                | opt 5.0.0
opt600                                | opt 6.0.0
opt700                                | opt 7.0.0
opt800                                | opt 8.0.0
opt900                                | opt 9.0.0
cppx_p1240r1                          | p1240r1
cppx_p1240r2                          | p1240r2 trunk
cppx_p2320                            | p2320 trunk
p0332                                 | ponyc 0.33.2
p0341                                 | ponyc 0.34.1
p0351                                 | ponyc 0.35.1
p0360                                 | ponyc 0.36.0
p0370                                 | ponyc 0.37.0
p0383                                 | ponyc 0.38.3
p0391                                 | ponyc 0.39.1
p0400                                 | ponyc 0.40.0
p0412                                 | ponyc 0.41.2
p0420                                 | ponyc 0.42.0
p0432                                 | ponyc 0.43.2
p0440                                 | ponyc 0.44.0
p0452                                 | ponyc 0.45.2
p0460                                 | ponyc 0.46.0
p0470                                 | ponyc 0.47.0
p0480                                 | ponyc 0.48.0
p0491                                 | ponyc 0.49.1
p0500                                 | ponyc 0.50.0
p0511                                 | ponyc 0.51.1
ponynightly                           | ponyc nightly
ppcg1120                              | power gcc 11.2.0
cppcg1120                             | power gcc 11.2.0
gimpleppcg1120                        | power gcc 11.2.0
ppcg1210                              | power gcc 12.1.0
cppcg1210                             | power gcc 12.1.0
gimpleppcg1210                        | power gcc 12.1.0
ppcg1220                              | power gcc 12.2.0
cppcg1220                             | power gcc 12.2.0
gimpleppcg1220                        | power gcc 12.2.0
ppcg1230                              | power gcc 12.3.0
cppcg1230                             | power gcc 12.3.0
gimpleppcg1230                        | power gcc 12.3.0
ppcg1240                              | power gcc 12.4.0
cppcg1240                             | power gcc 12.4.0
ppcg1310                              | power gcc 13.1.0
cppcg1310                             | power gcc 13.1.0
gimpleppcg1310                        | power gcc 13.1.0
ppcg1320                              | power gcc 13.2.0
cppcg1320                             | power gcc 13.2.0
gimpleppcg1320                        | power gcc 13.2.0
ppcg1330                              | power gcc 13.3.0
cppcg1330                             | power gcc 13.3.0
gimpleppcg1330                        | power gcc 13.3.0
ppcg1410                              | power gcc 14.1.0
cppcg1410                             | power gcc 14.1.0
gimpleppcg1410                        | power gcc 14.1.0
ppcg1420                              | power gcc 14.2.0
cppcg1420                             | power gcc 14.2.0
gimpleppcg1420                        | power gcc 14.2.0
ppcg48                                | power gcc 4.8.5
cppcg48                               | power gcc 4.8.5
fppc64g8                              | power64 AT12.0
ppc64g8                               | power64 AT12.0 (gcc8)
cppc64g8                              | power64 AT12.0 (gcc8)
fppc64g9                              | power64 AT13.0
ppc64g9                               | power64 AT13.0 (gcc9)
cppc64g9                              | power64 AT13.0 (gcc9)
gimpleppc64g9                         | power64 AT13.0 (gcc9)
ppc64g1120                            | power64 gcc 11.2.0
ppc64g1210                            | power64 gcc 12.1.0
ppc64g1220                            | power64 gcc 12.2.0
ppc64g1230                            | power64 gcc 12.3.0
ppc64g1240                            | power64 gcc 12.4.0
ppc64g1310                            | power64 gcc 13.1.0
ppc64g1320                            | power64 gcc 13.2.0
ppc64g1330                            | power64 gcc 13.3.0
ppc64g1410                            | power64 gcc 14.1.0
ppc64g1420                            | power64 gcc 14.2.0
ppc64gtrunk                           | power64 gcc trunk
fppc64leg8                            | power64le AT12.0
ppc64leg8                             | power64le AT12.0 (gcc8)
cppc64leg8                            | power64le AT12.0 (gcc8)
fppc64leg9                            | power64le AT13.0
ppc64leg9                             | power64le AT13.0 (gcc9)
cppc64leg9                            | power64le AT13.0 (gcc9)
gimpleppc64leg9                       | power64le AT13.0 (gcc9)
ppc64leclang                          | power64le clang (trunk)
cppc64leclang                         | power64le clang (trunk)
ppc64leg1120                          | power64le gcc 11.2.0
cppc64leg1120                         | power64le gcc 11.2.0
gimpleppc64leg1120                    | power64le gcc 11.2.0
ppc64leg1210                          | power64le gcc 12.1.0
cppc64leg1210                         | power64le gcc 12.1.0
gimpleppc64leg1210                    | power64le gcc 12.1.0
ppc64leg1220                          | power64le gcc 12.2.0
cppc64leg1220                         | power64le gcc 12.2.0
gimpleppc64leg1220                    | power64le gcc 12.2.0
ppc64leg1230                          | power64le gcc 12.3.0
cppc64leg1230                         | power64le gcc 12.3.0
gimpleppc64leg1230                    | power64le gcc 12.3.0
ppc64leg1240                          | power64le gcc 12.4.0
cppc64leg1240                         | power64le gcc 12.4.0
ppc64leg1310                          | power64le gcc 13.1.0
cppc64leg1310                         | power64le gcc 13.1.0
gimpleppc64leg1310                    | power64le gcc 13.1.0
ppc64leg1320                          | power64le gcc 13.2.0
cppc64leg1320                         | power64le gcc 13.2.0
gimpleppc64leg1320                    | power64le gcc 13.2.0
ppc64leg1330                          | power64le gcc 13.3.0
cppc64leg1330                         | power64le gcc 13.3.0
gimpleppc64leg1330                    | power64le gcc 13.3.0
ppc64leg1410                          | power64le gcc 14.1.0
cppc64leg1410                         | power64le gcc 14.1.0
gimpleppc64leg1410                    | power64le gcc 14.1.0
ppc64leg1420                          | power64le gcc 14.2.0
cppc64leg1420                         | power64le gcc 14.2.0
gimpleppc64leg1420                    | power64le gcc 14.2.0
ppc64leg630                           | power64le gcc 6.3.0
cppc64leg630                          | power64le gcc 6.3.0
ppc64legtrunk                         | power64le gcc trunk
cppc64legtrunk                        | power64le gcc trunk
gnatppc1120                           | powerpc gnat 11.2.0
gnatppc1210                           | powerpc gnat 12.1.0
gnatppc1220                           | powerpc gnat 12.2.0
gnatppc1230                           | powerpc gnat 12.3.0
gnatppc1240                           | powerpc gnat 12.4.0
gnatppc1310                           | powerpc gnat 13.1.0
gnatppc1320                           | powerpc gnat 13.2.0
gnatppc1330                           | powerpc gnat 13.3.0
gnatppc1410                           | powerpc gnat 14.1.0
gnatppc1420                           | powerpc gnat 14.2.0
ppc64clang                            | powerpc64 clang (trunk)
cppc64clang                           | powerpc64 clang (trunk)
gnatppc641210                         | powerpc64 gnat 12.1.0
gnatppc641220                         | powerpc64 gnat 12.2.0
gnatppc641230                         | powerpc64 gnat 12.3.0
gnatppc641240                         | powerpc64 gnat 12.4.0
gnatppc641310                         | powerpc64 gnat 13.1.0
gnatppc641320                         | powerpc64 gnat 13.2.0
gnatppc641330                         | powerpc64 gnat 13.3.0
gnatppc641410                         | powerpc64 gnat 14.1.0
gnatppc641420                         | powerpc64 gnat 14.2.0
gnatppc64trunk                        | powerpc64 gnat trunk
gnatppc64le1120                       | powerpc64le gnat 11.2.0
gnatppc64le1210                       | powerpc64le gnat 12.1.0
gnatppc64le1220                       | powerpc64le gnat 12.2.0
gnatppc64le1230                       | powerpc64le gnat 12.3.0
gnatppc64le1240                       | powerpc64le gnat 12.4.0
gnatppc64le1310                       | powerpc64le gnat 13.1.0
gnatppc64le1320                       | powerpc64le gnat 13.2.0
gnatppc64le1330                       | powerpc64le gnat 13.3.0
gnatppc64le1410                       | powerpc64le gnat 14.1.0
gnatppc64le1420                       | powerpc64le gnat 14.2.0
gnatppc64letrunk                      | powerpc64le gnat trunk
ppci055                               | ppci 0.5.5
java-r8-8233                          | r8 8.2.33
kotlin-r8-8233                        | r8 8.2.33
java-r8-8242                          | r8 8.2.42
kotlin-r8-8242                        | r8 8.2.42
java-r8-8247                          | r8 8.2.47
kotlin-r8-8247                        | r8 8.2.47
java-r8-8336                          | r8 8.3.36
kotlin-r8-8336                        | r8 8.3.36
java-r8-8337                          | r8 8.3.37
kotlin-r8-8337                        | r8 8.3.37
java-r8-8510                          | r8 8.5.10
kotlin-r8-8510                        | r8 8.5.10
java-r8-8527                          | r8 8.5.27
kotlin-r8-8527                        | r8 8.5.27
java-r8-8535                          | r8 8.5.35
kotlin-r8-8535                        | r8 8.5.35
gnatriscv64103                        | riscv64 gnat 10.3.0-2 (Alire)
gnatriscv64112                        | riscv64 gnat 11.2.0-3 (Alire)
gnatriscv641230                       | riscv64 gnat 12.3.0
gnatriscv641240                       | riscv64 gnat 12.4.0
gnatriscv641310                       | riscv64 gnat 13.1.0
gnatriscv641320                       | riscv64 gnat 13.2.0
gnatriscv641330                       | riscv64 gnat 13.3.0
gnatriscv641410                       | riscv64 gnat 14.1.0
gnatriscv641420                       | riscv64 gnat 14.2.0
r100                                  | rustc 1.0.0
r110                                  | rustc 1.1.0
r1100                                 | rustc 1.10.0
r1110                                 | rustc 1.11.0
r1120                                 | rustc 1.12.0
r1130                                 | rustc 1.13.0
r1140                                 | rustc 1.14.0
r1151                                 | rustc 1.15.1
r1160                                 | rustc 1.16.0
r1170                                 | rustc 1.17.0
r1180                                 | rustc 1.18.0
r1190                                 | rustc 1.19.0
r120                                  | rustc 1.2.0
r1200                                 | rustc 1.20.0
r1210                                 | rustc 1.21.0
r1220                                 | rustc 1.22.0
r1230                                 | rustc 1.23.0
r1240                                 | rustc 1.24.0
r1250                                 | rustc 1.25.0
r1260                                 | rustc 1.26.0
r1270                                 | rustc 1.27.0
r1271                                 | rustc 1.27.1
r1280                                 | rustc 1.28.0
r1290                                 | rustc 1.29.0
r130                                  | rustc 1.3.0
r1300                                 | rustc 1.30.0
r1310                                 | rustc 1.31.0
r1320                                 | rustc 1.32.0
r1330                                 | rustc 1.33.0
r1340                                 | rustc 1.34.0
r1350                                 | rustc 1.35.0
r1360                                 | rustc 1.36.0
r1370                                 | rustc 1.37.0
r1380                                 | rustc 1.38.0
r1390                                 | rustc 1.39.0
r140                                  | rustc 1.4.0
r1400                                 | rustc 1.40.0
r1410                                 | rustc 1.41.0
r1420                                 | rustc 1.42.0
r1430                                 | rustc 1.43.0
r1440                                 | rustc 1.44.0
r1450                                 | rustc 1.45.0
r1452                                 | rustc 1.45.2
r1460                                 | rustc 1.46.0
r1470                                 | rustc 1.47.0
r1480                                 | rustc 1.48.0
r1490                                 | rustc 1.49.0
r150                                  | rustc 1.5.0
r1500                                 | rustc 1.50.0
r1510                                 | rustc 1.51.0
r1520                                 | rustc 1.52.0
r1530                                 | rustc 1.53.0
r1540                                 | rustc 1.54.0
r1550                                 | rustc 1.55.0
r1560                                 | rustc 1.56.0
r1570                                 | rustc 1.57.0
r1580                                 | rustc 1.58.0
r1590                                 | rustc 1.59.0
r160                                  | rustc 1.6.0
r1600                                 | rustc 1.60.0
r1610                                 | rustc 1.61.0
r1620                                 | rustc 1.62.0
r1630                                 | rustc 1.63.0
r1640                                 | rustc 1.64.0
r1650                                 | rustc 1.65.0
r1660                                 | rustc 1.66.0
r1670                                 | rustc 1.67.0
r1680                                 | rustc 1.68.0
r1690                                 | rustc 1.69.0
r170                                  | rustc 1.7.0
r1700                                 | rustc 1.70.0
r1710                                 | rustc 1.71.0
r1720                                 | rustc 1.72.0
r1730                                 | rustc 1.73.0
r1740                                 | rustc 1.74.0
r1750                                 | rustc 1.75.0
r1760                                 | rustc 1.76.0
r1770                                 | rustc 1.77.0
r1780                                 | rustc 1.78.0
r1790                                 | rustc 1.79.0
r180                                  | rustc 1.8.0
r1800                                 | rustc 1.80.0
r1810                                 | rustc 1.81.0
r1820                                 | rustc 1.82.0
r190                                  | rustc 1.9.0
beta                                  | rustc beta
nightly                               | rustc nightly
rustccggcc-master                     | rustc-cg-gcc (master)
gccs390x1120                          | s390x gcc 11.2.0
cgccs390x112                          | s390x gcc 11.2.0
gimplegccs390x112                     | s390x gcc 11.2.0
s390xg1210                            | s390x gcc 12.1.0
cs390xg1210                           | s390x gcc 12.1.0
gimples390xg1210                      | s390x gcc 12.1.0
s390xg1220                            | s390x gcc 12.2.0
cs390xg1220                           | s390x gcc 12.2.0
objcs390xg1220                        | s390x gcc 12.2.0
gimples390xg1220                      | s390x gcc 12.2.0
s390xg1230                            | s390x gcc 12.3.0
cs390xg1230                           | s390x gcc 12.3.0
objcs390xg1230                        | s390x gcc 12.3.0
gimples390xg1230                      | s390x gcc 12.3.0
s390xg1240                            | s390x gcc 12.4.0
cs390xg1240                           | s390x gcc 12.4.0
objcs390xg1240                        | s390x gcc 12.4.0
s390xg1310                            | s390x gcc 13.1.0
cs390xg1310                           | s390x gcc 13.1.0
objcs390xg1310                        | s390x gcc 13.1.0
gimples390xg1310                      | s390x gcc 13.1.0
s390xg1320                            | s390x gcc 13.2.0
cs390xg1320                           | s390x gcc 13.2.0
objcs390xg1320                        | s390x gcc 13.2.0
gimples390xg1320                      | s390x gcc 13.2.0
s390xg1330                            | s390x gcc 13.3.0
cs390xg1330                           | s390x gcc 13.3.0
objcs390xg1330                        | s390x gcc 13.3.0
gimples390xg1330                      | s390x gcc 13.3.0
s390xg1410                            | s390x gcc 14.1.0
cs390xg1410                           | s390x gcc 14.1.0
objcs390xg1410                        | s390x gcc 14.1.0
gimples390xg1410                      | s390x gcc 14.1.0
s390xg1420                            | s390x gcc 14.2.0
cs390xg1420                           | s390x gcc 14.2.0
objcs390xg1420                        | s390x gcc 14.2.0
gimples390xg1420                      | s390x gcc 14.2.0
fs390xg1210                           | s390x gfortran 12.1.0
fs390xg1220                           | s390x gfortran 12.2.0
fs390xg1230                           | s390x gfortran 12.3.0
fs390xg1240                           | s390x gfortran 12.4.0
fs390xg1310                           | s390x gfortran 13.1.0
fs390xg1320                           | s390x gfortran 13.2.0
fs390xg1330                           | s390x gfortran 13.3.0
fs390xg1410                           | s390x gfortran 14.1.0
fs390xg1420                           | s390x gfortran 14.2.0
scalac21214                           | scalac 2.12.14
scalac2136                            | scalac 2.13.6
scalac300                             | scalac 3.0.0
shg1220                               | sh gcc 12.2.0
cshg1220                              | sh gcc 12.2.0
gimpleshg1220                         | sh gcc 12.2.0
shg1230                               | sh gcc 12.3.0
cshg1230                              | sh gcc 12.3.0
gimpleshg1230                         | sh gcc 12.3.0
shg1240                               | sh gcc 12.4.0
cshg1240                              | sh gcc 12.4.0
shg1310                               | sh gcc 13.1.0
cshg1310                              | sh gcc 13.1.0
gimpleshg1310                         | sh gcc 13.1.0
shg1320                               | sh gcc 13.2.0
cshg1320                              | sh gcc 13.2.0
gimpleshg1320                         | sh gcc 13.2.0
shg1330                               | sh gcc 13.3.0
cshg1330                              | sh gcc 13.3.0
gimpleshg1330                         | sh gcc 13.3.0
shg1410                               | sh gcc 14.1.0
cshg1410                              | sh gcc 14.1.0
gimpleshg1410                         | sh gcc 14.1.0
shg1420                               | sh gcc 14.2.0
cshg1420                              | sh gcc 14.2.0
gimpleshg1420                         | sh gcc 14.2.0
shg494                                | sh gcc 4.9.4
cshg494                               | sh gcc 4.9.4
shg950                                | sh gcc 9.5.0
cshg950                               | sh gcc 9.5.0
gimpleshg950                          | sh gcc 9.5.0
snowballv010                          | snowball 0.1.0
solc0426                              | solc 0.4.26
solc0517                              | solc 0.5.17
solc0612                              | solc 0.6.12
solc076                               | solc 0.7.6
solc0821                              | solc 0.8.21
gnatsparc1220                         | sparc gnat 12.2.0
gnatsparc1230                         | sparc gnat 12.3.0
gnatsparc1240                         | sparc gnat 12.4.0
gnatsparc1310                         | sparc gnat 13.1.0
gnatsparc1320                         | sparc gnat 13.2.0
gnatsparc1330                         | sparc gnat 13.3.0
gnatsparc1410                         | sparc gnat 14.1.0
gnatsparc1420                         | sparc gnat 14.2.0
gnatsparcleon1310                     | sparc leon gnat 13.1.0
gnatsparcleon1320                     | sparc leon gnat 13.2.0
gnatsparcleon1330                     | sparc leon gnat 13.3.0
gnatsparcleon1410                     | sparc leon gnat 14.1.0
gnatsparcleon1420                     | sparc leon gnat 14.2.0
gnatsparc641220                       | sparc64 gnat 12.2.0
gnatsparc641230                       | sparc64 gnat 12.3.0
gnatsparc641240                       | sparc64 gnat 12.4.0
gnatsparc641310                       | sparc64 gnat 13.1.0
gnatsparc641320                       | sparc64 gnat 13.2.0
gnatsparc641330                       | sparc64 gnat 13.3.0
gnatsparc641410                       | sparc64 gnat 14.1.0
gnatsparc641420                       | sparc64 gnat 14.2.0
spice01902                            | spice 0.19.2
spice01903                            | spice 0.19.3
spice01904                            | spice 0.19.4
spice01905                            | spice 0.19.5
spice01906                            | spice 0.19.6
spice02000                            | spice 0.20.0
spice02001                            | spice 0.20.1
spice02002                            | spice 0.20.2
spice02003                            | spice 0.20.3
spice02004                            | spice 0.20.4
spice02005                            | spice 0.20.5
spice02006                            | spice 0.20.6
cltrunk                               | trunk sm_86 CUDA-11.3
v8trunk                               | v8 (trunk)
v8113                                 | v8 11.3
vast-trunk                            | vast (trunk)
cvast-trunk                           | vast (trunk)
cl19_2015_u3_64                       | x64 msvc v19.0 (WINE)
ccl19_2015_u3_64                      | x64 msvc v19.0 (WINE)
cl19_64                               | x64 msvc v19.10 (WINE)
ccl19_64                              | x64 msvc v19.10 (WINE)
cl_new_64                             | x64 msvc v19.14 (WINE)
ccl_new_64                            | x64 msvc v19.14 (WINE)
vcpp_v19_20_VS16_0_x64                | x64 msvc v19.20 VS16.0
vc_v19_20_VS16_0_x64                  | x64 msvc v19.20 VS16.0
vcpp_v19_21_VS16_1_x64                | x64 msvc v19.21 VS16.1
vc_v19_21_VS16_1_x64                  | x64 msvc v19.21 VS16.1
vcpp_v19_22_VS16_2_x64                | x64 msvc v19.22 VS16.2
vc_v19_22_VS16_2_x64                  | x64 msvc v19.22 VS16.2
vcpp_v19_23_VS16_3_x64                | x64 msvc v19.23 VS16.3
vc_v19_23_VS16_3_x64                  | x64 msvc v19.23 VS16.3
vcpp_v19_24_VS16_4_x64                | x64 msvc v19.24 VS16.4
vc_v19_24_VS16_4_x64                  | x64 msvc v19.24 VS16.4
vcpp_v19_25_VS16_5_x64                | x64 msvc v19.25 VS16.5
vc_v19_25_VS16_5_x64                  | x64 msvc v19.25 VS16.5
vcpp_v19_27_VS16_7_x64                | x64 msvc v19.27 VS16.7
vc_v19_27_VS16_7_x64                  | x64 msvc v19.27 VS16.7
vcpp_v19_28_VS16_8_x64                | x64 msvc v19.28 VS16.8
vc_v19_28_VS16_8_x64                  | x64 msvc v19.28 VS16.8
vcpp_v19_28_VS16_9_x64                | x64 msvc v19.28 VS16.9
vc_v19_28_VS16_9_x64                  | x64 msvc v19.28 VS16.9
vcpp_v19_29_VS16_10_x64               | x64 msvc v19.29 VS16.10
vc_v19_29_VS16_10_x64                 | x64 msvc v19.29 VS16.10
vcpp_v19_29_VS16_11_x64               | x64 msvc v19.29 VS16.11
vc_v19_29_VS16_11_x64                 | x64 msvc v19.29 VS16.11
vcpp_v19_30_VS17_0_x64                | x64 msvc v19.30 VS17.0
vc_v19_30_VS17_0_x64                  | x64 msvc v19.30 VS17.0
vcpp_v19_31_VS17_1_x64                | x64 msvc v19.31 VS17.1
vc_v19_31_VS17_1_x64                  | x64 msvc v19.31 VS17.1
vcpp_v19_32_VS17_2_x64                | x64 msvc v19.32 VS17.2
vc_v19_32_VS17_2_x64                  | x64 msvc v19.32 VS17.2
vcpp_v19_33_VS17_3_x64                | x64 msvc v19.33 VS17.3
vc_v19_33_VS17_3_x64                  | x64 msvc v19.33 VS17.3
vcpp_v19_34_VS17_4_x64                | x64 msvc v19.34 VS17.4
vc_v19_34_VS17_4_x64                  | x64 msvc v19.34 VS17.4
vcpp_v19_35_VS17_5_x64                | x64 msvc v19.35 VS17.5
vc_v19_35_VS17_5_x64                  | x64 msvc v19.35 VS17.5
vcpp_v19_36_VS17_6_x64                | x64 msvc v19.36 VS17.6
vc_v19_36_VS17_6_x64                  | x64 msvc v19.36 VS17.6
vcpp_v19_37_VS17_7_x64                | x64 msvc v19.37 VS17.7
vc_v19_37_VS17_7_x64                  | x64 msvc v19.37 VS17.7
vcpp_v19_38_VS17_8_x64                | x64 msvc v19.38 VS17.8
vc_v19_38_VS17_8_x64                  | x64 msvc v19.38 VS17.8
vcpp_v19_39_VS17_9_x64                | x64 msvc v19.39 VS17.9
vc_v19_39_VS17_9_x64                  | x64 msvc v19.39 VS17.9
vcpp_v19_40_VS17_10_x64               | x64 msvc v19.40 VS17.10
vc_v19_40_VS17_10_x64                 | x64 msvc v19.40 VS17.10
vcpp_v19_latest_x64                   | x64 msvc v19.latest
vc_v19_latest_x64                     | x64 msvc v19.latest
ccx8632_310                           | x86 CompCert 3.10
ccx8632_311                           | x86 CompCert 3.11
ccx8632_312                           | x86 CompCert 3.12
ccx8632_309                           | x86 CompCert 3.9
clean24_32                            | x86 clean 2.4
clean30_32                            | x86 clean 3.0
djggp494                              | x86 djgpp 4.9.4
djggp550                              | x86 djgpp 5.5.0
djggp640                              | x86 djgpp 6.4.0
djggp720                              | x86 djgpp 7.2.0
386_gltip                             | x86 gc (tip)
386_gl114                             | x86 gc 1.14
386_gl115                             | x86 gc 1.15
386_gl116                             | x86 gc 1.16
386_gl117                             | x86 gc 1.17
386_gl118                             | x86 gc 1.18
386_gl119                             | x86 gc 1.19
386_gl120                             | x86 gc 1.20
386_gl121                             | x86 gc 1.21
386_gl122                             | x86 gc 1.22.1
cg127                                 | x86 gcc 1.27
gccgo102                              | x86 gccgo 10.2.0
gccgo105                              | x86 gccgo 10.5.0
gccgo111                              | x86 gccgo 11.1.0
gccgo112                              | x86 gccgo 11.2.0
gccgo113                              | x86 gccgo 11.3.0
gccgo114                              | x86 gccgo 11.4.0
gccgo121                              | x86 gccgo 12.1.0
gccgo122                              | x86 gccgo 12.2.0
gccgo123                              | x86 gccgo 12.3.0
gccgo124                              | x86 gccgo 12.4.0
gccgo131                              | x86 gccgo 13.1
gccgo132                              | x86 gccgo 13.2
gccgo133                              | x86 gccgo 13.3
gccgo141                              | x86 gccgo 14.1
gccgo142                              | x86 gccgo 14.2
gccgo494                              | x86 gccgo 4.9.4
gccgo630                              | x86 gccgo 6.3.0
gccgo720                              | x86 gccgo 7.2.0
gccgo830                              | x86 gccgo 8.3.0
gccgo930                              | x86 gccgo 9.3.0
gccgo950                              | x86 gccgo 9.5.0
cl19_2015_u3_32                       | x86 msvc v19.0 (WINE)
ccl19_2015_u3_32                      | x86 msvc v19.0 (WINE)
cl19_32                               | x86 msvc v19.10 (WINE)
ccl19_32                              | x86 msvc v19.10 (WINE)
cl_new_32                             | x86 msvc v19.14 (WINE)
ccl_new_32                            | x86 msvc v19.14 (WINE)
vcpp_v19_20_VS16_0_x86                | x86 msvc v19.20 VS16.0
vc_v19_20_VS16_0_x86                  | x86 msvc v19.20 VS16.0
vcpp_v19_21_VS16_1_x86                | x86 msvc v19.21 VS16.1
vc_v19_21_VS16_1_x86                  | x86 msvc v19.21 VS16.1
vcpp_v19_22_VS16_2_x86                | x86 msvc v19.22 VS16.2
vc_v19_22_VS16_2_x86                  | x86 msvc v19.22 VS16.2
vcpp_v19_23_VS16_3_x86                | x86 msvc v19.23 VS16.3
vc_v19_23_VS16_3_x86                  | x86 msvc v19.23 VS16.3
vcpp_v19_24_VS16_4_x86                | x86 msvc v19.24 VS16.4
vc_v19_24_VS16_4_x86                  | x86 msvc v19.24 VS16.4
vcpp_v19_25_VS16_5_x86                | x86 msvc v19.25 VS16.5
vc_v19_25_VS16_5_x86                  | x86 msvc v19.25 VS16.5
vcpp_v19_27_VS16_7_x86                | x86 msvc v19.27 VS16.7
vc_v19_27_VS16_7_x86                  | x86 msvc v19.27 VS16.7
vcpp_v19_28_VS16_8_x86                | x86 msvc v19.28 VS16.8
vc_v19_28_VS16_8_x86                  | x86 msvc v19.28 VS16.8
vcpp_v19_28_VS16_9_x86                | x86 msvc v19.28 VS16.9
vc_v19_28_VS16_9_x86                  | x86 msvc v19.28 VS16.9
vcpp_v19_29_VS16_10_x86               | x86 msvc v19.29 VS16.10
vc_v19_29_VS16_10_x86                 | x86 msvc v19.29 VS16.10
vcpp_v19_29_VS16_11_x86               | x86 msvc v19.29 VS16.11
vc_v19_29_VS16_11_x86                 | x86 msvc v19.29 VS16.11
vcpp_v19_30_VS17_0_x86                | x86 msvc v19.30 VS17.0
vc_v19_30_VS17_0_x86                  | x86 msvc v19.30 VS17.0
vcpp_v19_31_VS17_1_x86                | x86 msvc v19.31 VS17.1
vc_v19_31_VS17_1_x86                  | x86 msvc v19.31 VS17.1
vcpp_v19_32_VS17_2_x86                | x86 msvc v19.32 VS17.2
vc_v19_32_VS17_2_x86                  | x86 msvc v19.32 VS17.2
vcpp_v19_33_VS17_3_x86                | x86 msvc v19.33 VS17.3
vc_v19_33_VS17_3_x86                  | x86 msvc v19.33 VS17.3
vcpp_v19_34_VS17_4_x86                | x86 msvc v19.34 VS17.4
vc_v19_34_VS17_4_x86                  | x86 msvc v19.34 VS17.4
vcpp_v19_35_VS17_5_x86                | x86 msvc v19.35 VS17.5
vc_v19_35_VS17_5_x86                  | x86 msvc v19.35 VS17.5
vcpp_v19_36_VS17_6_x86                | x86 msvc v19.36 VS17.6
vc_v19_36_VS17_6_x86                  | x86 msvc v19.36 VS17.6
vcpp_v19_37_VS17_7_x86                | x86 msvc v19.37 VS17.7
vc_v19_37_VS17_7_x86                  | x86 msvc v19.37 VS17.7
vcpp_v19_38_VS17_8_x86                | x86 msvc v19.38 VS17.8
vc_v19_38_VS17_8_x86                  | x86 msvc v19.38 VS17.8
vcpp_v19_39_VS17_9_x86                | x86 msvc v19.39 VS17.9
vc_v19_39_VS17_9_x86                  | x86 msvc v19.39 VS17.9
vcpp_v19_40_VS17_10_x86               | x86 msvc v19.40 VS17.10
vc_v19_40_VS17_10_x86                 | x86 msvc v19.40 VS17.10
vcpp_v19_latest_x86                   | x86 msvc v19.latest
vc_v19_latest_x86                     | x86 msvc v19.latest
nvc_x86_24_9                          | x86 nvc 24.9
nvcxx_x86_cxx22_11                    | x86 nvc++ 22.11
nvcxx_x86_cxx22_7                     | x86 nvc++ 22.7
nvcxx_x86_cxx22_9                     | x86 nvc++ 22.9
nvcxx_x86_cxx23_1                     | x86 nvc++ 23.1
nvcxx_x86_cxx23_11                    | x86 nvc++ 23.11
nvcxx_x86_cxx23_3                     | x86 nvc++ 23.3
nvcxx_x86_cxx23_5                     | x86 nvc++ 23.5
nvcxx_x86_cxx23_7                     | x86 nvc++ 23.7
nvcxx_x86_cxx23_9                     | x86 nvc++ 23.9
nvcxx_x86_cxx24_1                     | x86 nvc++ 24.1
nvcxx_x86_cxx24_3                     | x86 nvc++ 24.3
nvcxx_x86_cxx24_5                     | x86 nvc++ 24.5
nvcxx_x86_cxx24_7                     | x86 nvc++ 24.7
nvcxx_x86_cxx24_9                     | x86 nvc++ 24.9
nvfortran_x86_24_9                    | x86 nvfortran 24.9
ctendrax86trunk                       | x86 tendra (trunk)
gcc-snapshot                          | x86-64 GCCRS (GCC master)
gccrs-snapshot                        | x86-64 GCCRS (GCCRS master)
gccrs-g141                            | x86-64 GCCRS 14.1 (GCC)
gccrs-g142                            | x86-64 GCCRS 14.2 (GCC)
zapcc190308                           | x86-64 Zapcc 190308
gnuassnapshot                         | x86-64 binutils (trunk)
gnuas72                               | x86-64 binutils 2.27
gnuas73                               | x86-64 binutils 2.28
gnuas92                               | x86-64 binutils 2.29.1
gnuas103                              | x86-64 binutils 2.34
gnuas112                              | x86-64 binutils 2.36.1
gnuas121                              | x86-64 binutils 2.38
clang_ericwf_contracts                | x86-64 clang (EricWF contracts)
clang-rocm-trunk                      | x86-64 clang (amd-staging)
clang_assertions_trunk                | x86-64 clang (assertions trunk)
llvmas_assertions_trunk               | x86-64 clang (assertions trunk)
cclang_assertions_trunk               | x86-64 clang (assertions trunk)
clang_clangir                         | x86-64 clang (clangir)
clang_dascandy_contracts              | x86-64 clang (dascandy contracts)
clang_lifetime                        | x86-64 clang (experimental -Wlifetime)
clang_p1061                           | x86-64 clang (experimental P1061)
clang_p1144                           | x86-64 clang (experimental P1144)
clang_parmexpr                        | x86-64 clang (experimental P1221)
clang_bb_p2996                        | x86-64 clang (experimental P2996)
clang_p3068                           | x86-64 clang (experimental P3068)
clang_p3309                           | x86-64 clang (experimental P3309)
clang_p3367                           | x86-64 clang (experimental P3367)
clang_p3372                           | x86-64 clang (experimental P3372)
clang_autonsdmi                       | x86-64 clang (experimental metaprogramming - P2632)
clang_concepts                        | x86-64 clang (old concepts branch)
clang_p1974                           | x86-64 clang (p1974)
clang_patmat                          | x86-64 clang (pattern matching - P2688)
clang_reflection                      | x86-64 clang (reflection)
clang_resugar                         | x86-64 clang (resugar)
clang_embed                           | x86-64 clang (std::embed)
clang_p3412                           | x86-64 clang (string interpolation - P3412)
clang_dang                            | x86-64 clang (thephd.dev)
cclang_dang                           | x86-64 clang (thephd.dev)
clang_trunk                           | x86-64 clang (trunk)
llvmas_trunk                          | x86-64 clang (trunk)
cclang_trunk                          | x86-64 clang (trunk)
clang_variadic_friends                | x86-64 clang (variadic friends - P2893)
clang_widberg                         | x86-64 clang (widberg)
cclang_widberg                        | x86-64 clang (widberg)
clang1000                             | x86-64 clang 10.0.0
llvmas1000                            | x86-64 clang 10.0.0
cclang1000                            | x86-64 clang 10.0.0
clang100assert                        | x86-64 clang 10.0.0 (assertions)
clang1001                             | x86-64 clang 10.0.1
llvmas1001                            | x86-64 clang 10.0.1
cclang1001                            | x86-64 clang 10.0.1
clang1100                             | x86-64 clang 11.0.0
llvmas1100                            | x86-64 clang 11.0.0
cclang1100                            | x86-64 clang 11.0.0
clang110assert                        | x86-64 clang 11.0.0 (assertions)
clang1101                             | x86-64 clang 11.0.1
llvmas1101                            | x86-64 clang 11.0.1
cclang1101                            | x86-64 clang 11.0.1
clang1200                             | x86-64 clang 12.0.0
llvmas1200                            | x86-64 clang 12.0.0
cclang1200                            | x86-64 clang 12.0.0
clang120assert                        | x86-64 clang 12.0.0 (assertions)
clang1201                             | x86-64 clang 12.0.1
llvmas1201                            | x86-64 clang 12.0.1
cclang1201                            | x86-64 clang 12.0.1
clang1300                             | x86-64 clang 13.0.0
llvmas1300                            | x86-64 clang 13.0.0
cclang1300                            | x86-64 clang 13.0.0
clang130assert                        | x86-64 clang 13.0.0 (assertions)
clang1301                             | x86-64 clang 13.0.1
cclang1301                            | x86-64 clang 13.0.1
clang1400                             | x86-64 clang 14.0.0
llvmas1400                            | x86-64 clang 14.0.0
cclang1400                            | x86-64 clang 14.0.0
clang140assert                        | x86-64 clang 14.0.0 (assertions)
clang1500                             | x86-64 clang 15.0.0
llvmas1500                            | x86-64 clang 15.0.0
cclang1500                            | x86-64 clang 15.0.0
clang150assert                        | x86-64 clang 15.0.0 (assertions)
clang1600                             | x86-64 clang 16.0.0
llvmas1600                            | x86-64 clang 16.0.0
cclang1600                            | x86-64 clang 16.0.0
clang160assert                        | x86-64 clang 16.0.0 (assertions)
clang1701                             | x86-64 clang 17.0.1
llvmas1701                            | x86-64 clang 17.0.1
cclang1701                            | x86-64 clang 17.0.1
clang170assert                        | x86-64 clang 17.0.1 (assertions)
clang1810                             | x86-64 clang 18.1.0
llvmas1810                            | x86-64 clang 18.1.0
cclang1810                            | x86-64 clang 18.1.0
clang181assert                        | x86-64 clang 18.1.0 (assertions)
clang1910                             | x86-64 clang 19.1.0
cclang1910                            | x86-64 clang 19.1.0
clang191assert                        | x86-64 clang 19.1.0 (assertions)
clang26assert                         | x86-64 clang 2.6.0 (assertions)
clang27assert                         | x86-64 clang 2.7.0 (assertions)
clang28assert                         | x86-64 clang 2.8.0 (assertions)
clang29assert                         | x86-64 clang 2.9.0 (assertions)
clang30                               | x86-64 clang 3.0.0
llvmas30                              | x86-64 clang 3.0.0
cclang30                              | x86-64 clang 3.0.0
clang30assert                         | x86-64 clang 3.0.0 (assertions)
clang31                               | x86-64 clang 3.1
llvmas31                              | x86-64 clang 3.1
cclang31                              | x86-64 clang 3.1
clang31assert                         | x86-64 clang 3.1 (assertions)
clang32                               | x86-64 clang 3.2
llvmas32                              | x86-64 clang 3.2
cclang32                              | x86-64 clang 3.2
clang32assert                         | x86-64 clang 3.2 (assertions)
clang33                               | x86-64 clang 3.3
llvmas33                              | x86-64 clang 3.3
cclang33                              | x86-64 clang 3.3
clang33assert                         | x86-64 clang 3.3 (assertions)
clang34assert                         | x86-64 clang 3.4 (assertions)
clang341                              | x86-64 clang 3.4.1
llvmas341                             | x86-64 clang 3.4.1
cclang341                             | x86-64 clang 3.4.1
clang350                              | x86-64 clang 3.5
llvmas350                             | x86-64 clang 3.5
cclang350                             | x86-64 clang 3.5
clang35assert                         | x86-64 clang 3.5 (assertions)
clang351                              | x86-64 clang 3.5.1
llvmas351                             | x86-64 clang 3.5.1
cclang351                             | x86-64 clang 3.5.1
clang352                              | x86-64 clang 3.5.2
llvmas352                             | x86-64 clang 3.5.2
cclang352                             | x86-64 clang 3.5.2
clang36x                              | x86-64 clang 3.6
llvmas36x                             | x86-64 clang 3.6
cclang36x                             | x86-64 clang 3.6
clang36assert                         | x86-64 clang 3.6 (assertions)
clang37x                              | x86-64 clang 3.7
llvmas37x                             | x86-64 clang 3.7
cclang37x                             | x86-64 clang 3.7
clang37assert                         | x86-64 clang 3.7 (assertions)
clang371                              | x86-64 clang 3.7.1
llvmas371                             | x86-64 clang 3.7.1
cclang371                             | x86-64 clang 3.7.1
clang380                              | x86-64 clang 3.8
llvmas380                             | x86-64 clang 3.8
cclang380                             | x86-64 clang 3.8
clang38assert                         | x86-64 clang 3.8 (assertions)
clang381                              | x86-64 clang 3.8.1
llvmas381                             | x86-64 clang 3.8.1
cclang381                             | x86-64 clang 3.8.1
clang390                              | x86-64 clang 3.9.0
llvmas390                             | x86-64 clang 3.9.0
cclang390                             | x86-64 clang 3.9.0
clang39assert                         | x86-64 clang 3.9.0 (assertions)
clang391                              | x86-64 clang 3.9.1
llvmas391                             | x86-64 clang 3.9.1
cclang391                             | x86-64 clang 3.9.1
clang400                              | x86-64 clang 4.0.0
llvmas400                             | x86-64 clang 4.0.0
cclang400                             | x86-64 clang 4.0.0
clang40assert                         | x86-64 clang 4.0.0 (assertions)
clang401                              | x86-64 clang 4.0.1
llvmas401                             | x86-64 clang 4.0.1
cclang401                             | x86-64 clang 4.0.1
clang500                              | x86-64 clang 5.0.0
llvmas500                             | x86-64 clang 5.0.0
cclang500                             | x86-64 clang 5.0.0
clang50assert                         | x86-64 clang 5.0.0 (assertions)
clang501                              | x86-64 clang 5.0.1
cclang501                             | x86-64 clang 5.0.1
clang502                              | x86-64 clang 5.0.2
cclang502                             | x86-64 clang 5.0.2
clang600                              | x86-64 clang 6.0.0
llvmas600                             | x86-64 clang 6.0.0
cclang600                             | x86-64 clang 6.0.0
clang60assert                         | x86-64 clang 6.0.0 (assertions)
clang601                              | x86-64 clang 6.0.1
cclang601                             | x86-64 clang 6.0.1
clang700                              | x86-64 clang 7.0.0
llvmas700                             | x86-64 clang 7.0.0
cclang700                             | x86-64 clang 7.0.0
clang70assert                         | x86-64 clang 7.0.0 (assertions)
clang701                              | x86-64 clang 7.0.1
cclang701                             | x86-64 clang 7.0.1
clang710                              | x86-64 clang 7.1.0
cclang710                             | x86-64 clang 7.1.0
clang800                              | x86-64 clang 8.0.0
llvmas800                             | x86-64 clang 8.0.0
cclang800                             | x86-64 clang 8.0.0
clang80assert                         | x86-64 clang 8.0.0 (assertions)
clang801                              | x86-64 clang 8.0.1
cclang801                             | x86-64 clang 8.0.1
clang900                              | x86-64 clang 9.0.0
llvmas900                             | x86-64 clang 9.0.0
cclang900                             | x86-64 clang 9.0.0
clang90assert                         | x86-64 clang 9.0.0 (assertions)
clang901                              | x86-64 clang 9.0.1
cclang901                             | x86-64 clang 9.0.1
clang-rocm-40502                      | x86-64 clang rocm-4.5.2
clang-rocm-50002                      | x86-64 clang rocm-5.0.2
clang-rocm-50103                      | x86-64 clang rocm-5.1.3
clang-rocm-50203                      | x86-64 clang rocm-5.2.3
clang-rocm-50303                      | x86-64 clang rocm-5.3.3
clang-rocm-50700                      | x86-64 clang rocm-5.7.0
clang-rocm-60002                      | x86-64 clang rocm-6.0.2
clang-rocm-60102                      | x86-64 clang rocm-6.1.2
clean_trunk                           | x86-64 clean (trunk)
clean24_64                            | x86-64 clean 2.4
clean30_64                            | x86-64 clean 3.0
fpctrunk                              | x86-64 fpc (trunk)
fpc260                                | x86-64 fpc 2.6.0
fpc262                                | x86-64 fpc 2.6.2
fpc264                                | x86-64 fpc 2.6.4
fpc302                                | x86-64 fpc 3.0.2
fpc304                                | x86-64 fpc 3.0.4
fpc320                                | x86-64 fpc 3.2.0
fpc322                                | x86-64 fpc 3.2.2
gltip                                 | x86-64 gc (tip)
gl1100                                | x86-64 gc 1.10
gl1101                                | x86-64 gc 1.10.1
gl1110                                | x86-64 gc 1.11
gl1120                                | x86-64 gc 1.12
gl1130                                | x86-64 gc 1.13
gl1140                                | x86-64 gc 1.14
gl1150                                | x86-64 gc 1.15
gl1160                                | x86-64 gc 1.16
gl1170                                | x86-64 gc 1.17
gl1180                                | x86-64 gc 1.18
gl1190                                | x86-64 gc 1.19
gl1200                                | x86-64 gc 1.20
gl1210                                | x86-64 gc 1.21
gl1221                                | x86-64 gc 1.22.1
6g141                                 | x86-64 gc 1.4.1
gl172                                 | x86-64 gc 1.7.2
gl185                                 | x86-64 gc 1.8.5
gl187                                 | x86-64 gc 1.8.7
gl192                                 | x86-64 gc 1.9.2
gl194                                 | x86-64 gc 1.9.4
gcontract-labels-trunk                | x86-64 gcc (contract labels)
gcontracts-nonattr-trunk              | x86-64 gcc (contracts natural syntax)
gcontracts-trunk                      | x86-64 gcc (contracts)
gcxx-coroutines-trunk                 | x86-64 gcc (coroutines)
gcxx-modules-trunk                    | x86-64 gcc (modules)
gcc-static-analysis-trunk             | x86-64 gcc (static analysis)
cgstatic-analysis                     | x86-64 gcc (static analysis)
gimplegstatic-analysis                | x86-64 gcc (static analysis)
gcc-embed-trunk                       | x86-64 gcc (std::embed)
gsnapshot                             | x86-64 gcc (trunk)
cgsnapshot                            | x86-64 gcc (trunk)
objcgsnapshot                         | x86-64 gcc (trunk)
objcppgsnapshot                       | x86-64 gcc (trunk)
gimplegsnapshot                       | x86-64 gcc (trunk)
g101                                  | x86-64 gcc 10.1
cg101                                 | x86-64 gcc 10.1
gimpleg101                            | x86-64 gcc 10.1
g102                                  | x86-64 gcc 10.2
cg102                                 | x86-64 gcc 10.2
gimpleg102                            | x86-64 gcc 10.2
g103                                  | x86-64 gcc 10.3
cg103                                 | x86-64 gcc 10.3
gimpleg103                            | x86-64 gcc 10.3
g104                                  | x86-64 gcc 10.4
cg104                                 | x86-64 gcc 10.4
gimpleg104                            | x86-64 gcc 10.4
g105                                  | x86-64 gcc 10.5
cg105                                 | x86-64 gcc 10.5
objcg105                              | x86-64 gcc 10.5
objcppg105                            | x86-64 gcc 10.5
gimpleg105                            | x86-64 gcc 10.5
g111                                  | x86-64 gcc 11.1
cg111                                 | x86-64 gcc 11.1
gimpleg111                            | x86-64 gcc 11.1
g112                                  | x86-64 gcc 11.2
cg112                                 | x86-64 gcc 11.2
gimpleg112                            | x86-64 gcc 11.2
g113                                  | x86-64 gcc 11.3
cg113                                 | x86-64 gcc 11.3
gimpleg113                            | x86-64 gcc 11.3
g114                                  | x86-64 gcc 11.4
cg114                                 | x86-64 gcc 11.4
objcg114                              | x86-64 gcc 11.4
objcppg114                            | x86-64 gcc 11.4
gimpleg114                            | x86-64 gcc 11.4
g121                                  | x86-64 gcc 12.1
cg121                                 | x86-64 gcc 12.1
gimpleg121                            | x86-64 gcc 12.1
g122                                  | x86-64 gcc 12.2
cg122                                 | x86-64 gcc 12.2
objcg122                              | x86-64 gcc 12.2
objcppg122                            | x86-64 gcc 12.2
gimpleg122                            | x86-64 gcc 12.2
g123                                  | x86-64 gcc 12.3
cg123                                 | x86-64 gcc 12.3
objcg123                              | x86-64 gcc 12.3
objcppg123                            | x86-64 gcc 12.3
gimpleg123                            | x86-64 gcc 12.3
g124                                  | x86-64 gcc 12.4
cg124                                 | x86-64 gcc 12.4
objcg124                              | x86-64 gcc 12.4
objcppg124                            | x86-64 gcc 12.4
gimpleg124                            | x86-64 gcc 12.4
g131                                  | x86-64 gcc 13.1
cg131                                 | x86-64 gcc 13.1
objcg131                              | x86-64 gcc 13.1
objcppg131                            | x86-64 gcc 13.1
gimpleg131                            | x86-64 gcc 13.1
g132                                  | x86-64 gcc 13.2
cg132                                 | x86-64 gcc 13.2
objcg132                              | x86-64 gcc 13.2
objcppg132                            | x86-64 gcc 13.2
gimpleg132                            | x86-64 gcc 13.2
g133                                  | x86-64 gcc 13.3
cg133                                 | x86-64 gcc 13.3
objcg133                              | x86-64 gcc 13.3
objcppg133                            | x86-64 gcc 13.3
gimpleg133                            | x86-64 gcc 13.3
g141                                  | x86-64 gcc 14.1
cg141                                 | x86-64 gcc 14.1
objcg141                              | x86-64 gcc 14.1
objcppg141                            | x86-64 gcc 14.1
gimpleg141                            | x86-64 gcc 14.1
g142                                  | x86-64 gcc 14.2
cg142                                 | x86-64 gcc 14.2
objcg142                              | x86-64 gcc 14.2
objcppg142                            | x86-64 gcc 14.2
gimpleg142                            | x86-64 gcc 14.2
g346                                  | x86-64 gcc 3.4.6
cg346                                 | x86-64 gcc 3.4.6
objcg346                              | x86-64 gcc 3.4.6
g404                                  | x86-64 gcc 4.0.4
cg404                                 | x86-64 gcc 4.0.4
objcg404                              | x86-64 gcc 4.0.4
g412                                  | x86-64 gcc 4.1.2
cg412                                 | x86-64 gcc 4.1.2
g447                                  | x86-64 gcc 4.4.7
cg447                                 | x86-64 gcc 4.4.7
g453                                  | x86-64 gcc 4.5.3
cg453                                 | x86-64 gcc 4.5.3
g464                                  | x86-64 gcc 4.6.4
cg464                                 | x86-64 gcc 4.6.4
g471                                  | x86-64 gcc 4.7.1
cg471                                 | x86-64 gcc 4.7.1
g472                                  | x86-64 gcc 4.7.2
cg472                                 | x86-64 gcc 4.7.2
g473                                  | x86-64 gcc 4.7.3
cg473                                 | x86-64 gcc 4.7.3
g474                                  | x86-64 gcc 4.7.4
cg474                                 | x86-64 gcc 4.7.4
g481                                  | x86-64 gcc 4.8.1
cg481                                 | x86-64 gcc 4.8.1
g482                                  | x86-64 gcc 4.8.2
cg482                                 | x86-64 gcc 4.8.2
g483                                  | x86-64 gcc 4.8.3
cg483                                 | x86-64 gcc 4.8.3
g484                                  | x86-64 gcc 4.8.4
cg484                                 | x86-64 gcc 4.8.4
g485                                  | x86-64 gcc 4.8.5
cg485                                 | x86-64 gcc 4.8.5
g490                                  | x86-64 gcc 4.9.0
cg490                                 | x86-64 gcc 4.9.0
g491                                  | x86-64 gcc 4.9.1
cg491                                 | x86-64 gcc 4.9.1
g492                                  | x86-64 gcc 4.9.2
cg492                                 | x86-64 gcc 4.9.2
g493                                  | x86-64 gcc 4.9.3
cg493                                 | x86-64 gcc 4.9.3
g494                                  | x86-64 gcc 4.9.4
cg494                                 | x86-64 gcc 4.9.4
g510                                  | x86-64 gcc 5.1
cg510                                 | x86-64 gcc 5.1
g520                                  | x86-64 gcc 5.2
cg520                                 | x86-64 gcc 5.2
g530                                  | x86-64 gcc 5.3
cg530                                 | x86-64 gcc 5.3
g540                                  | x86-64 gcc 5.4
cg540                                 | x86-64 gcc 5.4
g550                                  | x86-64 gcc 5.5
g6                                    | x86-64 gcc 6.1
cg6                                   | x86-64 gcc 6.1
g62                                   | x86-64 gcc 6.2
cg62                                  | x86-64 gcc 6.2
g63                                   | x86-64 gcc 6.3
cg63                                  | x86-64 gcc 6.3
g64                                   | x86-64 gcc 6.4
g65                                   | x86-64 gcc 6.5
cg65                                  | x86-64 gcc 6.5
objcg650                              | x86-64 gcc 6.5.0
g71                                   | x86-64 gcc 7.1
cg71                                  | x86-64 gcc 7.1
g72                                   | x86-64 gcc 7.2
cg72                                  | x86-64 gcc 7.2
g73                                   | x86-64 gcc 7.3
cg73                                  | x86-64 gcc 7.3
g74                                   | x86-64 gcc 7.4
cg74                                  | x86-64 gcc 7.4
g75                                   | x86-64 gcc 7.5
cg75                                  | x86-64 gcc 7.5
g81                                   | x86-64 gcc 8.1
cg81                                  | x86-64 gcc 8.1
g82                                   | x86-64 gcc 8.2
cg82                                  | x86-64 gcc 8.2
g83                                   | x86-64 gcc 8.3
cg83                                  | x86-64 gcc 8.3
g84                                   | x86-64 gcc 8.4
cg84                                  | x86-64 gcc 8.4
g85                                   | x86-64 gcc 8.5
cg85                                  | x86-64 gcc 8.5
g91                                   | x86-64 gcc 9.1
cg91                                  | x86-64 gcc 9.1
gimpleg91                             | x86-64 gcc 9.1
g92                                   | x86-64 gcc 9.2
cg92                                  | x86-64 gcc 9.2
gimpleg92                             | x86-64 gcc 9.2
g93                                   | x86-64 gcc 9.3
cg93                                  | x86-64 gcc 9.3
gimpleg93                             | x86-64 gcc 9.3
g94                                   | x86-64 gcc 9.4
cg94                                  | x86-64 gcc 9.4
gimpleg94                             | x86-64 gcc 9.4
g95                                   | x86-64 gcc 9.5
cg95                                  | x86-64 gcc 9.5
gimpleg95                             | x86-64 gcc 9.5
gm2snapshot                           | x86-64 gcc gm2 (snapshot)
gm2131                                | x86-64 gcc gm2 13.1
gm2132                                | x86-64 gcc gm2 13.2
gm2133                                | x86-64 gcc gm2 13.3
gm2141                                | x86-64 gcc gm2 14.1
gm2142                                | x86-64 gcc gm2 14.2
gfortransnapshot                      | x86-64 gfortran (trunk)
gfortran101                           | x86-64 gfortran 10.1
gfortran102                           | x86-64 gfortran 10.2
gfortran103                           | x86-64 gfortran 10.3
gfortran104                           | x86-64 gfortran 10.4
gfortran105                           | x86-64 gfortran 10.5
gfortran111                           | x86-64 gfortran 11.1
gfortran112                           | x86-64 gfortran 11.2
gfortran113                           | x86-64 gfortran 11.3
gfortran114                           | x86-64 gfortran 11.4
gfortran121                           | x86-64 gfortran 12.1
gfortran122                           | x86-64 gfortran 12.2
gfortran123                           | x86-64 gfortran 12.3
gfortran124                           | x86-64 gfortran 12.4
gfortran131                           | x86-64 gfortran 13.1
gfortran132                           | x86-64 gfortran 13.2
gfortran133                           | x86-64 gfortran 13.3
gfortran141                           | x86-64 gfortran 14.1
gfortran142                           | x86-64 gfortran 14.2
gfortran494                           | x86-64 gfortran 4.9.4
gfortran550                           | x86-64 gfortran 5.5
gfortran63                            | x86-64 gfortran 6.3
gfortran71                            | x86-64 gfortran 7.1
gfortran72                            | x86-64 gfortran 7.2
gfortran73                            | x86-64 gfortran 7.3
gfortran81                            | x86-64 gfortran 8.1
gfortran82                            | x86-64 gfortran 8.2
gfortran83                            | x86-64 gfortran 8.3
gfortran84                            | x86-64 gfortran 8.4
gfortran85                            | x86-64 gfortran 8.5
gfortran91                            | x86-64 gfortran 9.1
gfortran92                            | x86-64 gfortran 9.2
gfortran93                            | x86-64 gfortran 9.3
gfortran94                            | x86-64 gfortran 9.4
ghc802                                | x86-64 ghc 8.0.2
ghc8105                               | x86-64 ghc 8.10.5
ghc841                                | x86-64 ghc 8.4.1
ghc842                                | x86-64 ghc 8.4.2
ghc843                                | x86-64 ghc 8.4.3
ghc844                                | x86-64 ghc 8.4.4
ghc861                                | x86-64 ghc 8.6.1
ghc862                                | x86-64 ghc 8.6.2
ghc901                                | x86-64 ghc 9.0.1
ghc921                                | x86-64 ghc 9.2.1
ghc922                                | x86-64 ghc 9.2.2
ghc945                                | x86-64 ghc 9.4.5
ghc961                                | x86-64 ghc 9.6.1
gnatsnapshot                          | x86-64 gnat (trunk)
gnat102                               | x86-64 gnat 10.2
gnat104                               | x86-64 gnat 10.4
gnat105                               | x86-64 gnat 10.5
gnat111                               | x86-64 gnat 11.1
gnat112                               | x86-64 gnat 11.2
gnat113                               | x86-64 gnat 11.3
gnat114                               | x86-64 gnat 11.4
gnat121                               | x86-64 gnat 12.1
gnat122                               | x86-64 gnat 12.2
gnat123                               | x86-64 gnat 12.3
gnat124                               | x86-64 gnat 12.4
gnat131                               | x86-64 gnat 13.1
gnat132                               | x86-64 gnat 13.2
gnat133                               | x86-64 gnat 13.3
gnat141                               | x86-64 gnat 14.1
gnat142                               | x86-64 gnat 14.2
gnat82                                | x86-64 gnat 8.2
gnat95                                | x86-64 gnat 9.5
icc1301                               | x86-64 icc 13.0.1
cicc1301                              | x86-64 icc 13.0.1
icc16                                 | x86-64 icc 16.0.3
cicc16                                | x86-64 icc 16.0.3
icc17                                 | x86-64 icc 17.0.0
cicc17                                | x86-64 icc 17.0.0
icc18                                 | x86-64 icc 18.0.0
cicc18                                | x86-64 icc 18.0.0
icc19                                 | x86-64 icc 19.0.0
cicc19                                | x86-64 icc 19.0.0
icc191                                | x86-64 icc 19.0.1
cicc191                               | x86-64 icc 19.0.1
icc202112                             | x86-64 icc 2021.1.2
cicc202112                            | x86-64 icc 2021.1.2
icc2021100                            | x86-64 icc 2021.10.0
cicc2021100                           | x86-64 icc 2021.10.0
icc202120                             | x86-64 icc 2021.2.0
cicc202120                            | x86-64 icc 2021.2.0
icc202130                             | x86-64 icc 2021.3.0
cicc202130                            | x86-64 icc 2021.3.0
icc202140                             | x86-64 icc 2021.4.0
cicc202140                            | x86-64 icc 2021.4.0
icc202150                             | x86-64 icc 2021.5.0
cicc202150                            | x86-64 icc 2021.5.0
icc202160                             | x86-64 icc 2021.6.0
cicc202160                            | x86-64 icc 2021.6.0
icc202170                             | x86-64 icc 2021.7.0
cicc202170                            | x86-64 icc 2021.7.0
icc202171                             | x86-64 icc 2021.7.1
cicc202171                            | x86-64 icc 2021.7.1
icc202180                             | x86-64 icc 2021.8.0
cicc202180                            | x86-64 icc 2021.8.0
icc202190                             | x86-64 icc 2021.9.0
cicc202190                            | x86-64 icc 2021.9.0
icxlatest                             | x86-64 icx (latest)
cicxlatest                            | x86-64 icx (latest)
icx202112                             | x86-64 icx 2021.1.2
cicx202112                            | x86-64 icx 2021.1.2
icx202120                             | x86-64 icx 2021.2.0
cicx202120                            | x86-64 icx 2021.2.0
icx202130                             | x86-64 icx 2021.3.0
cicx202130                            | x86-64 icx 2021.3.0
icx202140                             | x86-64 icx 2021.4.0
cicx202140                            | x86-64 icx 2021.4.0
icx202200                             | x86-64 icx 2022.0.0
cicx202200                            | x86-64 icx 2022.0.0
icx202210                             | x86-64 icx 2022.1.0
cicx202210                            | x86-64 icx 2022.1.0
icx202220                             | x86-64 icx 2022.2.0
cicx202220                            | x86-64 icx 2022.2.0
icx202221                             | x86-64 icx 2022.2.1
cicx202221                            | x86-64 icx 2022.2.1
icx202300                             | x86-64 icx 2023.0.0
cicx202300                            | x86-64 icx 2023.0.0
icx202310                             | x86-64 icx 2023.1.0
cicx202310                            | x86-64 icx 2023.1.0
icx202321                             | x86-64 icx 2023.2.1
icx202400                             | x86-64 icx 2024.0.0
cicx202400                            | x86-64 icx 2024.0.0
icx202410                             | x86-64 icx 2024.1.0
icx202420                             | x86-64 icx 2024.2.0
ifort19                               | x86-64 ifort 19.0.0
ifort202112                           | x86-64 ifort 2021.1.2
ifort2021100                          | x86-64 ifort 2021.10.0
ifort2021110                          | x86-64 ifort 2021.11.0
ifort202120                           | x86-64 ifort 2021.2.0
ifort202130                           | x86-64 ifort 2021.3.0
ifort202140                           | x86-64 ifort 2021.4.0
ifort202150                           | x86-64 ifort 2021.5.0
ifort202160                           | x86-64 ifort 2021.6.0
ifort202170                           | x86-64 ifort 2021.7.0
ifort202171                           | x86-64 ifort 2021.7.1
ifort202180                           | x86-64 ifort 2021.8.0
ifort202190                           | x86-64 ifort 2021.9.0
ifxlatest                             | x86-64 ifx (latest)
ifx202112                             | x86-64 ifx 2021.1.2
ifx202120                             | x86-64 ifx 2021.2.0
ifx202130                             | x86-64 ifx 2021.3.0
ifx202140                             | x86-64 ifx 2021.4.0
ifx202200                             | x86-64 ifx 2022.0.0
ifx202210                             | x86-64 ifx 2022.1.0
ifx202220                             | x86-64 ifx 2022.2.0
ifx202221                             | x86-64 ifx 2022.2.1
ifx202300                             | x86-64 ifx 2023.0.0
ifx202310                             | x86-64 ifx 2023.1.0
ifx202321                             | x86-64 ifx 2023.2.1
ifx202400                             | x86-64 ifx 2024.0.0
ocaml4042                             | x86-64 ocamlopt 4.04.2
ocaml4061                             | x86-64 ocamlopt 4.06.1
ocaml4071                             | x86-64 ocamlopt 4.07.1
ocaml4071flambda                      | x86-64 ocamlopt 4.07.1-flambda
ocaml4081                             | x86-64 ocamlopt 4.08.1
ocaml4081flambda                      | x86-64 ocamlopt 4.08.1-flambda
ocaml4090                             | x86-64 ocamlopt 4.09.0
ocaml4090flambda                      | x86-64 ocamlopt 4.09.0-flambda
ocaml4091                             | x86-64 ocamlopt 4.09.1
ocaml4091flambda                      | x86-64 ocamlopt 4.09.1-flambda
ocaml4100                             | x86-64 ocamlopt 4.10.0
ocaml4100flambda                      | x86-64 ocamlopt 4.10.0-flambda
ocaml4101                             | x86-64 ocamlopt 4.10.1
ocaml4101flambda                      | x86-64 ocamlopt 4.10.1-flambda
ocaml4102                             | x86-64 ocamlopt 4.10.2
ocaml4102flambda                      | x86-64 ocamlopt 4.10.2-flambda
ocaml4111                             | x86-64 ocamlopt 4.11.1
ocaml4111flambda                      | x86-64 ocamlopt 4.11.1-flambda
ocaml4112                             | x86-64 ocamlopt 4.11.2
ocaml4112flambda                      | x86-64 ocamlopt 4.11.2-flambda
ocaml4120                             | x86-64 ocamlopt 4.12.0
ocaml4120flambda                      | x86-64 ocamlopt 4.12.0-flambda
ocaml4131                             | x86-64 ocamlopt 4.13.1
ocaml4131flambda                      | x86-64 ocamlopt 4.13.1-flambda
ocaml4140                             | x86-64 ocamlopt 4.14.0
ocaml4140flambda                      | x86-64 ocamlopt 4.14.0-flambda
ocaml4142                             | x86-64 ocamlopt 4.14.2
ocaml4142flambda                      | x86-64 ocamlopt 4.14.2-flambda
ocaml5000                             | x86-64 ocamlopt 5.0.0
ocaml5000flambda                      | x86-64 ocamlopt 5.0.0-flambda
ocaml5100                             | x86-64 ocamlopt 5.1.0
ocaml5101                             | x86-64 ocamlopt 5.1.1
ocaml5200                             | x86-64 ocamlopt 5.2.0
swift311                              | x86-64 swiftc 3.1.1
swift402                              | x86-64 swiftc 4.0.2
swift403                              | x86-64 swiftc 4.0.3
swift41                               | x86-64 swiftc 4.1
swift411                              | x86-64 swiftc 4.1.1
swift412                              | x86-64 swiftc 4.1.2
swift42                               | x86-64 swiftc 4.2
swift50                               | x86-64 swiftc 5.0
swift51                               | x86-64 swiftc 5.1
swift510                              | x86-64 swiftc 5.10
swift52                               | x86-64 swiftc 5.2
swift53                               | x86-64 swiftc 5.3
swift54                               | x86-64 swiftc 5.4
swift55                               | x86-64 swiftc 5.5
swift56                               | x86-64 swiftc 5.6
swift57                               | x86-64 swiftc 5.7
swift58                               | x86-64 swiftc 5.8
swift59                               | x86-64 swiftc 5.9
swiftnightly                          | x86-64 swiftc nightly
ccx8664_310                           | x86_64 CompCert 3.10
ccx8664_311                           | x86_64 CompCert 3.11
ccx8664_312                           | x86_64 CompCert 3.12
ccx8664_309                           | x86_64 CompCert 3.9
z88dk22                               | z88dk 2.2
z0100                                 | zig 0.10.0
z0110                                 | zig 0.11.0
z0120                                 | zig 0.12.0
z0121                                 | zig 0.12.1
z0130                                 | zig 0.13.0
z020                                  | zig 0.2.0
z030                                  | zig 0.3.0
z040                                  | zig 0.4.0
z050                                  | zig 0.5.0
z060                                  | zig 0.6.0
z070                                  | zig 0.7.0
z071                                  | zig 0.7.1
z080                                  | zig 0.8.0
z090                                  | zig 0.9.0
zcxx0100                              | zig c++ 0.10.0
zcxx0110                              | zig c++ 0.11.0
zcxx0120                              | zig c++ 0.12.0
zcxx0121                              | zig c++ 0.12.1
zcxx0130                              | zig c++ 0.13.0
zcxx060                               | zig c++ 0.6.0
zcxx070                               | zig c++ 0.7.0
zcxx071                               | zig c++ 0.7.1
zcxx080                               | zig c++ 0.8.0
zcxx090                               | zig c++ 0.9.0
zcxxtrunk                             | zig c++ trunk
zcc0100                               | zig cc 0.10.0
zcc0110                               | zig cc 0.11.0
zcc0120                               | zig cc 0.12.0
zcc0121                               | zig cc 0.12.1
zcc0130                               | zig cc 0.13.0
zcc060                                | zig cc 0.6.0
zcc070                                | zig cc 0.7.0
zcc071                                | zig cc 0.7.1
zcc080                                | zig cc 0.8.0
zcc090                                | zig cc 0.9.0
zcctrunk                              | zig cc trunk
ztrunk                                | zig trunk
zksolc141                             | zksolc 1.4.1
zksolc150                             | zksolc 1.5.0
`