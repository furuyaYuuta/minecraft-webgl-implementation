
attribute vec4 a_position;

varying vec4 f_position;

void main() {
    f_position = a_position;
    gl_Position = vec4(a_position.xy, 1.0, 1.0);
}