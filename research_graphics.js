main();

function main(){
    const canvas = document.querySelector("#gl-canvas");
    const gl = canvas.getContext("webgl");

    if(gl = null){
        alert(
            "Unable to initialise WebGl."
        );
        return;
    }
    gl.clearColor(0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}