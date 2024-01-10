import type { App } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default {
	install: (app: App, options?: Record<string, never>) => {
		gsap.registerPlugin(ScrollTrigger)
        app.provide('gsap', options)
    }
}
