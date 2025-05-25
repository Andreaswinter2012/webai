function submit(){
        //------Weights------
            
            const w11 = 0.5;
            const w21 = 0.5;
            const w31 = 0.5;
            const w41 = 1.0;
            const w51 = 1.0;
            const w61 = 1.0;
            const w71 = 0.5;
            const w81 = 0.5;
            const w91 = 0.5;
            
            const w12 = 0.5;
            const w22 = 1.2;
            const w32 = 0.5;
            const w42 = 0.5;
            const w52 = 1.0;
            const w62 = 0.5;
            const w72 = 0.5;
            const w82 = 1.0;
            const w92 = 0.5;
            
            const w13 = 1.0;
            const w23 = 0.5;
            const w33 = 0.5;
            const w43 = 0.5;
            const w53 = 1.0;
            const w63 = 0.5;
            const w73 = 0.5;
            const w83 = 0.5;
            const w93 = 1.0;
            
            const w14 = 0.5;
            const w24 = 0.5;
            const w34 = 1.0;
            const w44 = 0.5;
            const w54 = 1.0;
            const w64 = 0.5;
            const w74 = 1.0;
            const w84 = 0.5;
            const w94 = 1.0;
            
            const w15 = 0.5;
            const w25 = 0.9;
            const w35 = 0.5;
            const w45 = 0.9;
            const w55 = 0.9;
            const w65 = 0.9;
            const w75 = 0.5;
            const w85 = 0.9;
            const w95 = 0.5;
            
            const w16 = 0.8;
            const w26 = 0.7;
            const w36 = 0.8;
            const w46 = 0.7;
            const w56 = 0.7;
            const w66 = 0.7;
            const w76 = 0.8;
            const w86 = 0.7;
            const w96 = 0.8;
        //--Neural-network-------
           
            let i1 = document.getElementById("i1").value;
            let n11 = i1 * w11;
            let n12 = i1 * w12;
            let n13 = i1 * w13;
            let n14 = i1 * w14;
            let n15 = i1 * w15;
            let n16 = i1 * w16;
            
            
            let i2 = document.getElementById("i2").value;
            let n21 = i2 * w21;
            let n22 = i2 * w22;
            let n23 = i2 * w23;
            let n24 = i2 * w24;
            let n25 = i2 * w25;
            let n26 = i2 * w26;
            
            
            
            let i3 = document.getElementById("i3").value;
            let n31 = i3 * w31;
            let n32 = i3 * w32;
            let n33 = i3 * w33;
            let n34 = i3 * w34;
            let n35 = i3 * w35;
            let n36 = i3 * w36;
            
            
            
            let i4 = document.getElementById("i4").value;
            let n41 = i4 * w41;
            let n42 = i4 * w42;
            let n43 = i4 * w43;
            let n44 = i4 * w44;
            let n45 = i4 * w45;
            let n46 = i4 * w46;
            
            
            let i5 = document.getElementById("i5").value;
            let n51 = i5 * w51;
            let n52 = i5 * w52;
            let n53 = i5 * w53;
            let n54 = i5 * w54;
            let n55 = i5 * w55;
            let n56 = i5 * w56;
            
            
            
            let i6 = document.getElementById("i6").value;
            let n61 = i6 * w61;
            let n62 = i6 * w62;
            let n63 = i6 * w63;
            let n64 = i6 * w64;
            let n65 = i6 * w65;
            let n66 = i6 * w66;
            
            
            
            let i7 = document.getElementById("i7").value;
            let n71 = i7 * w71;
            let n72 = i7 * w72;
            let n73 = i7 * w73;
            let n74 = i7 * w74;
            let n75 = i7 * w75;
            let n76 = i7 * w76;
            
            
            
            let i8 = document.getElementById("i8").value;
            let n81 = i8 * w81;
            let n82 = i8 * w82;
            let n83 = i8 * w83;
            let n84 = i8 * w84;
            let n85 = i8 * w85;
            let n86 = i8 * w86;
            
            
            
            let i9 = document.getElementById("i9").value;
            let n91 = i9 * w91;
            let n92 = i9 * w92;
            let n93 = i9 * w93;
            let n94 = i9 * w94;
            let n95 = i9 * w95;
            let n96 = i9 * w96;
            
            
        //------output-------------
        let output1 = n11 + n21 + n31 + n41 + n51 + n61 + n71 + n81 + n91 ;
            
        let output2 = n12 + n22 + n32 + n42 + n52 + n62 + n72 + n82 + n92 ;
            
        let output3 = n13 + n23 + n33 + n43 + n53 + n63 + n73 + n83 + n93 ;
            
        let output4 = n14 + n24 + n34 + n44 + n54 + n64 + n74 + n84 + n94 ;
            
        let output5 = n15 + n25 + n35 + n45 + n55 + n65 + n75 + n85 + n95 ;
            
        let output6 = n16 + n26 + n36 + n46 + n56 + n66 + n76 + n86 + n96 ;
        document.getElementById("out1").innerHTML = output1;
        document.getElementById("out2").innerHTML = output2;
        document.getElementById("out3").innerHTML = output3;
        document.getElementById("out4").innerHTML = output4;
        document.getElementById("out5").innerHTML = output5;
        document.getElementById("out6").innerHTML = output6;

        }