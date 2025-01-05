import adobeXd from '/skill-images/adobe-xd.svg';
import adobeaudition from '/skill-images/adobeaudition.svg';
import afterEffects from '/skill-images/after-effects.svg';
import angular from '/skill-images/angular.svg';
import aws from '/skill-images/aws.svg';
import azure from '/skill-images/azure.svg';
import blender from '/skill-images/blender.svg';
import bootstrap from '/skill-images/bootstrap.svg';
import bulma from '/skill-images/bulma.svg';
import c from '/skill-images/c.svg';
import canva from '/skill-images/canva.svg';
import capacitorjs from '/skill-images/capacitorjs.svg';
import coffeescript from '/skill-images/coffeescript.svg';
import cplusplus from '/skill-images/cplusplus.svg';
import csharp from '/skill-images/csharp.svg';
import css from '/skill-images/css.svg';
import dart from '/skill-images/dart.svg';
import deno from '/skill-images/deno.svg';
import django from '/skill-images/django.svg';
import docker from '/skill-images/docker.svg';
import fastify from '/skill-images/fastify.svg';
import figma from '/skill-images/figma.svg';
import firebase from '/skill-images/firebase.svg';
import flutter from '/skill-images/flutter.svg';
import gcp from '/skill-images/gcp.svg';
import gimp from '/skill-images/gimp.svg';
import git from '/skill-images/git.svg';
import go from '/skill-images/go.svg';
import graphql from '/skill-images/graphql.svg';
import haxe from '/skill-images/haxe.svg';
import html from '/skill-images/html.svg';
import illustrator from '/skill-images/illustrator.svg';
import ionic from '/skill-images/ionic.svg';
import java from '/skill-images/java.svg';
import javascript from '/skill-images/javascript.svg';
import julia from '/skill-images/julia.svg';
import kotlin from '/skill-images/kotlin.svg';
import lightroom from '/skill-images/lightroom.svg';
import markdown from '/skill-images/markdown.svg';
import materialui from '/skill-images/materialui.svg';
import matlab from '/skill-images/matlab.svg';
import memsql from '/skill-images/memsql.svg';
import microsoftoffice from '/skill-images/microsoftoffice.svg';
import mongoDB from '/skill-images/mongoDB.svg';
import mysql from '/skill-images/mysql.svg';
import nextJS from '/skill-images/nextJS.svg';
import nginx from '/skill-images/nginx.svg';
import numpy from '/skill-images/numpy.svg';
import nuxtJS from '/skill-images/nuxtJS.svg';
import opencv from '/skill-images/opencv.svg';
import photoshop from '/skill-images/photoshop.svg';
import php from '/skill-images/php.svg';
import picsart from '/skill-images/picsart.svg';
import postgresql from '/skill-images/postgresql.svg';
import premierepro from '/skill-images/premierepro.svg';
import python from '/skill-images/python.svg';
import pytorch from '/skill-images/pytorch.svg';
import react from '/skill-images/react.svg';
import ruby from '/skill-images/ruby.svg';
import selenium from '/skill-images/selenium.svg';
import sketch from '/skill-images/sketch.svg';
import strapi from '/skill-images/strapi.svg';
import svelte from '/skill-images/svelte.svg';
import swift from '/skill-images/swift.svg';
import tailwind from '/skill-images/tailwind.svg';
import tensorflow from '/skill-images/tensorflow.svg';
import typescript from '/skill-images/typescript.svg';
import unity from '/skill-images/unity.svg';
import vitejs from '/skill-images/vitejs.svg';
import vue from '/skill-images/vue.svg';
import vuetifyjs from '/skill-images/vuetifyjs.svg';
import webix from '/skill-images/webix.svg';
import wolframalpha from '/skill-images/wolframalpha.svg';
import wordpress from '/skill-images/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}
